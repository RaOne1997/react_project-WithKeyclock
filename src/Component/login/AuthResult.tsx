export interface AuthResult {
    accessToken: string | null;
    encryptedAccessToken: string | null;
    expireInSeconds: number;
    shouldResetPassword: boolean;
    passwordResetCode: string | null;
    userId: number;
    requiresTwoFactorVerification: boolean;
    twoFactorAuthProviders: string | null;
    twoFactorRememberClientToken: string | null;
    returnUrl: string | null;
    refreshToken: string | null;
    refreshTokenExpireInSeconds: number;
    isError: boolean;
    errorMessage: string | null;
    tenantId: number | null;
    userName: string | null;
    emailAddress: string | null;
    fullName: string | null;
    userProfileImage: string | null;
    tenantName: string | null;
    userRole: string | null;
    userTimeZone: string | null;
    orgnizationName: string | null;
}



export interface loginUserDetails {
    userId: number;
    tenantId: number | null;
    userName: string | null;
    emailAddress: string | null;
    fullName: string | null;
    userProfileImage: string | null;
    tenantName: string | null;
    userRole: string | null;
    userTimeZone: string | null;
    orgnizationName: string | null;
}
