export interface ITabData {
    actual: number;
    target: number;
    progress: number;
    date: string;
    type: 'success' | 'warning' | 'error';
    cardType: TTabKey
}
export type TTabKey = 'strategy_map' | 'overview' | 'kpis' | 'initatives'
export type TStatusType = 'default' | 'success' | 'error' | 'warning' | 'info'
export interface ITab {
    /** for locales later */
    key: TTabKey;
    /** title of the tab */
    title: string;
    data: ITabData[];
    disabled?: boolean;
}

const DEFAULT_DATA: ITabData[] = [
    { actual: 20, target: 40, progress: 65, date: '12/22', type: 'warning', cardType: 'kpis' },
    { actual: 18, target: 30, progress: 35, date: '11/22', type: 'error', cardType: 'kpis' },
    { actual: 28, target: 44, progress: 86, date: '1/23', type: 'success', cardType: 'initatives' },
    { actual: 20, target: 40, progress: 65, date: '12/22', type: 'warning', cardType: 'kpis' },
    { actual: 18, target: 30, progress: 25, date: '11/22', type: 'error', cardType: 'initatives' },
    { actual: 28, target: 44, progress: 86, date: '1/23', type: 'success', cardType: 'kpis' },
    { actual: 18, target: 30, progress: 25, date: '11/22', type: 'error', cardType: 'kpis' },
    { actual: 28, target: 44, progress: 86, date: '1/23', type: 'success', cardType: 'initatives' },
];

const KPIS: ITabData[] = [...DEFAULT_DATA].map((item) => ({ ...item, cardType: 'kpis' }));
const INITIATIVES: ITabData[] = [...DEFAULT_DATA].map((item) => ({ ...item, cardType: 'initatives' }));

export const KPIsStatuses: { label: string; type: TStatusType }[] = [
    { label: 'GOOD', type: 'success' },
    { label: 'AVERAGE', type: 'warning' },
    { label: 'WEAK', type: 'error' },
];

export const InitativesStatuses: { label: string; type: TStatusType }[] = [
    { label: 'ON-TRACK', type: 'success' },
    { label: 'AT-RISK', type: 'warning' },
    { label: 'DELAYED', type: 'error' },
    { label: 'NOT-STARTED', type: 'error' },
]

export const statusesKey: { [key in TTabKey]: { label: string, type: TStatusType }[] } = {
    kpis: KPIsStatuses,
    initatives: InitativesStatuses,
    strategy_map: [],
    overview: []
}
export const TabsData: ITab[] = [
    { key: 'strategy_map', title: 'STRATEGY MAP', data: DEFAULT_DATA },
    { key: 'overview', title: 'OVERVIEW', data: DEFAULT_DATA, disabled: true },
    { key: 'kpis', title: 'KPIs', data: KPIS },
    { key: 'initatives', title: 'INITIATIVES', data: INITIATIVES },
]