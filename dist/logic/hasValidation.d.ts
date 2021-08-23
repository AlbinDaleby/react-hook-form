declare const _default: <T extends Partial<{
    required: string | import("../types").ValidationRule<boolean>;
    min: import("../types").ValidationRule<string | number>;
    max: import("../types").ValidationRule<string | number>;
    maxLength: import("../types").ValidationRule<string | number>;
    minLength: import("../types").ValidationRule<string | number>;
    maxDate: any;
    minDate: any;
    pattern: import("../types").ValidationRule<RegExp>;
    validate: import("../types").Validate<any> | Record<string, import("../types").Validate<any>>;
    valueAsNumber: boolean;
    valueAsDate: boolean;
    value: any;
    setValueAs: (value: any) => any;
    shouldUnregister: boolean;
    disabled: boolean;
    deps: string[];
}>>(options?: T | undefined, mounted?: boolean | undefined) => any;
export default _default;
