export interface IAllLeguesRequestBody {
	country: "RUS"
	locale: "ru"
	provider: null
}

export interface AllLeguesResponseBody {
	countries: ISortLeague[]
	favourite: null
	userSettings: null
	international: ISortLeague[]
	popular: ILeague[]
}

export interface ISortLeague {
	id: number
	ccode: string
	name: string
	localizedName: string
	leagues: ILeague[]
}
export interface ILeague {
	id: number
	name: string
	localizedName: string
	pageUrl: string
}