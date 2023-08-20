import { YComponent } from './y-component.model';

export class ComponentX {
    constructor(
        public name: string = '',
        public yComponents: YComponent[] = []
    ) { }
}
