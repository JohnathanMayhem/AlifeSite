export type DataModel = {
    primary: number;
    er: number;
    pr: number;
    her2: number;
    age: number;
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

export enum EDataModel {
    Primary = 'primary',
    Er = 'er',
    Pr = 'pr',
    Her2 = 'her2',
    Age = 'age',
    Tumor_size = 'tumor_size',
    Resection = 'resection',
    Stage = 'stage',
    Grad = 'grad',
    Axillary_level = 'axillary_level',
    Rx = 'rx',
    Histology = 'histology',
    T = 't',
    N = 'n',
    M = 'm',
    Lymph = 'lymph',
    Year_of_diag = 'year_of_diag',
}

export enum Epr {
    yes = 1,
    no = 0,
}

export enum ET {
    zero = 0,
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    tx = 5,
    tis = 6,
}

export enum EN {
    zero = 0,
    one = 1,
    two = 2,
    three = 3,
    nx = 4,
}

export enum EResection {
    zero = 0,
    one = 1,
    three = 3,
    five = 5,
}

export enum EHystology {
    a = 8010,
    b = 8520,
    c = 8500,
    d= 8522,
    e= 8480,
    f= 8211,
    g = 8530,
    h = 8501,
    i = 8541,
    j = 8050,
    k = 9020,
    l = 8401,
    m = 8510,
    n = 8501,
    o = 9010,
}

export enum EStage {
    r = 0,
    d = 1,
    l = 2,
}

export enum EPrimary {
    n = 500,
    c = 501,
    ui = 502,
    di = 503,
    uo = 504,
    do= 505,
    a = 506,
    cov = 508,
    chest = 509,
}

export enum ELumph {
    a = 999,
    b = 0,
    c = 250,
    d = 600,
    e = 150,
    f = 255,
    g = 260,
    h = 620,
    i = 800,
    j = 510,
    k = 750,
    l = 820,
    m = 155,
    n = 763,
    o = 720,
    p = 760,
    q = 500,
    r = 740,
    s = 765,
    t = 710,
    u = 805,
    w = 748,
    x = 768,
    y = 770,
    z = 764,
}