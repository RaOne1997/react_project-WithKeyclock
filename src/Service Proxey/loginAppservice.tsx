import api from "../api";
import { AuthResult } from "../Component/login/AuthResult";

interface LoginResponse {
  result: AuthResult; // Define the structure of the result based on your API response
  errorMessage?: string;
  isError?: boolean;
}

const loginAPi = async (username: string, password: string, tenantId: number): Promise<LoginResponse | null> => {
  const jsonObject = {
    userNameOrEmailAddress: username,
    password: password,
    tenantId: tenantId
  };

  try {
    const response = await api.post('/TokenAuth/Authenticate', jsonObject);
    if (response.status === 200) {
      return { result: response.data.result as AuthResult, errorMessage: response.data.result.errorMessage, isError: response.data.result.isError };
    } else {
      console.error("Error: ", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error: ", error);
    return null;
  }
};

const checkTenantAvailability = async (tenancyName: string): Promise<{ tenantId: number | null, errorMessage: string }> => {
  const jsonObject = {
    tenancyName: tenancyName
  };

  try {
    const response = await api.post('/services/app/Account/IsTenantAvailable', jsonObject);
    const data = response.data as { result: any };
    if (data.result.tenantId === null) {
      return { tenantId: null, errorMessage: 'Tenant is not available' };
    } else {
      return { tenantId: data.result.tenantId, errorMessage: '' };
    }
  } catch (error) {
    console.error("Error: ", error);
    return { tenantId: null, errorMessage: 'An error occurred while checking tenant availability' };
  }
};

const logoutApi = async () => {

  try{
    const response = await api.post('/TokenAuth/LogOut');
    console.log( response.data);


  }catch(error){
    throw error;
  }

};

const  GeCurretUser = async () => {

    try {
        const response = await api.get('/services/app/Session/GetCurrentLoginInformations');
        return response.data;
    } catch (error) {
        console.error("Error: ", error);
        return null;
    }
}

export { loginAPi, checkTenantAvailability,GeCurretUser,logoutApi };