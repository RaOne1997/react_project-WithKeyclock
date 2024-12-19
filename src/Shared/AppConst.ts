class AppConst {
    static readonly userId: string = 'defaultUserId';
    static readonly tenantId: string = 'defaultTenantId';
    static CurrentUserDetails : userInfo
}



export { AppConst };



class userInfo {
    readonly emailAddress: string;
    readonly id: number;
    readonly name: string;
    readonly profilePictureId?: string | null;
    readonly surname: string;
    readonly userName: string;
    readonly userRole: string[];
    readonly fullName: string ;
  
    constructor(emailAddress: string, id: number, name: string, surname: string, userName: string, userRole: string[], profilePictureId?: string | null) {
      this.emailAddress = emailAddress;
      this.id = id;
      this.name = name;
      this.profilePictureId = profilePictureId;
      this.surname = surname;
      this.userName = userName;
      this.userRole = userRole;
       this.fullName = this.name + ' ' + this.surname;
    }
}
export { userInfo };



class PersistentStorage {
    private static instance: PersistentStorage;
    private storage: Record<string, any> = {}; // Key-value store for your data
  
    private constructor() {
      // Private constructor to prevent direct instantiation
    }
  
    // Get the single instance of the class (Singleton pattern)
    public static getInstance(): PersistentStorage {
      if (!PersistentStorage.instance) {
        PersistentStorage.instance = new PersistentStorage();
      }
      return PersistentStorage.instance;
    }
  
    // Set a value for a key
    public setValue(key: string, value: any): void {
      this.storage[key] = value;
    }
  
    // Get a value for a key
    public getValue(key: string): any {
      return this.storage[key];
    }
  
    // Clear a value for a key
    public clearValue(key: string): void {
      delete this.storage[key];
    }
  
    // Clear all stored values
    public clearAll(): void {
      this.storage = {};
    }
  }
  
  export default PersistentStorage;
  