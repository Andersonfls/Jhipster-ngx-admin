import { Router } from '@angular/router';
import { NbAuthService } from '../../services/auth.service';
export declare class NbResetPasswordComponent {
    protected service: NbAuthService;
    protected options: {};
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    strategy: string;
    submitted: boolean;
    errors: string[];
    messages: string[];
    user: any;
    constructor(service: NbAuthService, options: {}, router: Router);
    resetPass(): void;
    getConfigValue(key: string): any;
}
