export interface IMatchTeam {
	id: number
	score: number
	name: string
	longName: string
	redCards?: number
}
export interface IMatchStatus {
	utcTime: string
	started: boolean
	cancelled: boolean
	finished: boolean
	aggregatedStr?: string
	ongoing?: boolean
	homeRedCards?: boolean
	awayRedCards?: boolean
	statusId: number
	scoreStr?: string
	liveTime?: { short: string, shortKey: string, long: string, longKey: string, maxTime: number, addedTime: number}
	reason?: { long: string, longKey: string, short: string, shortKey: string }
}

export interface IMatch {
	away: IMatchTeam
	eliminatedTeamId: number | null
	home: IMatchTeam
	id: number
	leagueId: number
	status: IMatchStatus
	statusId: number
	cancelled?: boolean
	finished?: boolean
	started?: boolean
	utcTime?: string
	time: string
	timeTS: number
	tournamentStage: string
}

export interface IMatchesLeague {
	id: number
	primaryId: number
	parentLeagueId: number
	internalRank: number
	liveRank: number
	ccode: string
	name: string
	simpleLeague: boolean
	isGroup?: boolean
	matches: IMatch[]
	groupName?: string
}

export interface IMatchesResponseBody {
	date: string
	leagues: IMatchesLeague[]
}
