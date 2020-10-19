import { CalendarEvent } from 'calendar-utils';

export interface User {
    name: string;
    points: number;
    market: string;
}

export interface ProfileMenu {
    title: string;
    icon: Icon;
    target: string;
}

export interface Icon {
    icon: string;
    pack: string;
}

export interface UserInfo {
    nombre: string;
    username: string;
}

export interface HistoryTrade {
    Date_Transaction: string;
    Product_Name: string;
    Spent_Points: number;
    Status: string;
}

export interface Products {
    name: string;
    description: string;
    price: number;
    picture?: string;
}

export interface HistoryPoints {
    name: string;
    date: string;
    price: number;
    gain: boolean;
}

export interface Scope {
    nameGain: string;
    valueGain: number;
    nameSpent: string;
    valueSpent: number;
    nameMaxProfit: string;
    valueMaxProfit: number;
}


export interface ImageCarousel {
    id: number;
    source: string;
    redirect?: string;
}


export interface Central {
    name: string;
    id: number;
}

export interface Coordinate {
    x: number;
    y: number;
    value: number;
    percentageX: number;
}

export interface BodyHistoryTrade {
    rows: number;
}

export interface UserPointsRequest {
    Aviable_Points: string;
    CCMS_ID: number;
    Gain_Points: string;
    Max_Profit: string;
    Spent_Points: string;
    Theme: string;
}

export interface BannerRequest {
    Id: number;
    Banners: string;
    link?: string;
}

export interface HistoryTradeRequest {
    CCMS_ID: number;
    Date_Transaction: string;
    Product_Name: string;
    Spent_Points: number;
    Status: string;
}

export interface FilterSelectedCalendar {
    central: string;
    lob: string;
}

export interface FilterListCalendar {
    central: Central[];
    lob: LOB[];
}


interface LOB extends Central {
    test?: any;
}

export interface DayCalendar {
    date: Date;
    events: CalendarEvent[];
    idmax: number;
}

export interface Lob {
    Lob_Id: number;
    Lob: string;
}

export interface SubLob {
    SubLob_Id: number;
    SubLob: string;
}

export interface Rol {
    Role_Id: number;
    Role: string;
}

export interface Period {
    IdPeriod: number;
    Period_Name: string;
}

export interface Tenure {
    IdTenure: number;
    Tenure: string;
}

export interface BonoMax {
    BonusValue:number;
}

export interface GateWays {
    KPI_Name: string;
    TargetKPI: number;
    Share:number;
}

export interface ThresHold {
    KPI_Name: string;
    StartRange: number;
    EndRange: number;
    ParticipationKpi: number;
    BonusValue: number;
}

export interface Modifiers  {
    KPI_Name:string;
    StartRange:number;
    EndRange:number;
    PercentIncrement:number;
    IntegerIncrement:number;
}

export interface GlobalModifiers  {
    KPI_Name:string;
    StartRange:number;
    EndRange:number;
    PercentModifier:number;
    IntegerModifier:number;
}

export interface UnitPayment  {
    KPI_Name:string;
    Units_Per_KPI:number;
    TotalValue:number;
}

export interface KpiName  {
    IdKpi:number;
    KPI_Name:string;
}

export interface DialogData {
    NameLob: string;
    NameSubLob:string;
    NameRol: string;
    NamePeriod: string;
    NameTenure: string;
    tipo: string;
    Rol: number;
    Period: number;
    Tenure: number;

  }

  export interface  GateWaysTotal {
    idLocation: number;
    idRol:number;
    idPeriod: number;
    idTenure: number;
    json: string;

    
  }

  export interface KpiName2{
    idKpi:number;
    KpiName:string;
  }






