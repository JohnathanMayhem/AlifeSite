export type DataModel = {
    primary?: number;
    er?: number;
    pr?: number;
    her2?: number;
    age?: number;
    tumor_size?: number;
    resection?: number;
    stage?: number;
    grad?: number;
    axillary_level?: number;
    rx?: number;
    histology?: number;
    t?: number;
    n?: number;
    m?: number;
    lymph?: number;
    year_of_diag?: number
}

export enum Epr {
    yes = 1,
    no = 0
}