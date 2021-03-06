import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
/**
 * @title Filter autocomplete
 */
export declare class AutocompleteFilterExample {
    myControl: FormControl;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    filter(val: string): string[];
}
