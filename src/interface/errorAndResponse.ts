export interface Idone {
                    success : boolean;
                    status : number;
                    error: {
                        message? : string;
                        code? : number;
                        rest? : {
                            name: string
                            stack?: string | undefined
                            cause?: unknown
                        }
                    };
                    data : {
                        message? : string;
                        data? : any;

                    };
                    timestamp : number;

                }


export interface Iresponse {
    status: number;
    message?: string;
    data: any;
}