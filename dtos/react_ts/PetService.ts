export class PetDTO {
    id: number;
    name: string;
    category: string;
    photoUrls: array;
    tags: array;
    status: string;

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.category = data.category;
            this.photoUrls = data.photoUrls;
            this.tags = data.tags;
            this.status = data.status;
        }
    }
    static fromJS(data: any): PetDTO {
        let result = new PetDTO();
        result.id = data.id;
        result.name = data.name;
        result.category = data.category;
        result.photoUrls = data.photoUrls;
        result.tags = data.tags;
        result.status = data.status;
        return result;
    }
    toJSON(): any {
        const data: any = {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["category"] = this.category;
        data["photoUrls"] = this.photoUrls;
        data["tags"] = this.tags;
        data["status"] = this.status;
        return data;
    }
}
export interface IPetDTO {
    id: number;
    name: string;
    category: string;
    photoUrls: array;
    tags: array;
    status: string;
}
