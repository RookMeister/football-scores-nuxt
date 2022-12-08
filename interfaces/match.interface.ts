import type { ICompetitionInfoTags } from './competitions.interface'
import type { IMatchesResponce } from './matches.interface'
import type { IStandingParticipant } from './standings.interface'

export interface IMatchResponce {
  allNews: { items: IMatchNewsItem[] }
  awayTeamPreviousEvents: IMatchesResponce
  header: IMatchHeader
  homeTeamPreviousEvents: IMatchesResponce
  infoTags: ICompetitionInfoTags[]
  lastMatches: null
  materials: { items: [] }
  sports: { items: IMatchSport[] }
  tabs: ['roster', 'review', 'statistics', 'text-online']
  tags: {}
  topNews: { items: IMatchNewsItem[] }
  timeline: { items: IMatchTimelineItem[] }
  videos: { items: IMatchVideo[] }
}

interface IMatchHeader {
  competitors: IMatchHeaderCompetitor[]
  confirmedTime: boolean
  eventStatus: {
    commonStatus: string
    ended: boolean
    frontConfig: {}
    id: string
    live: boolean
    notStarted: boolean
    titleRu: string
    titleRuShort: string
  }
  eventType: { titleRu: string; urn: string; frontConfig: { '@type': string; config: [] } }
  finishTime: number
  frontConfig: {}
  id: number
  medalEvent: boolean
  priority: number
  roundDto?: { titleRu: string; priority: number; periodUrn: string }
  season: { id: number, urn: string, fromDate: string, toDate: string, year: string, titleRu: string, actual: boolean, frontConfig: {}, competition: {
    priority: number
    prioritySum: number
    sport: { id: number; urn: string; titleRu: string; priority: number }
    frontConfig: { '@class': string; logos: { default: string } }
    titleRu: string
    titleRuShort: string
    urn: string
  } }
  stageGroups: { [key: number]: { id: number; titleRu: string; priority: number; system: boolean } }
  stageIds: { id: number; groupIds: number[] }[]
  stages: { [key: number]: { genderTitleRu: string; id: number; priority: number; stageType: string; titleRu: string; system: boolean } }
  startTime: number
  technical: boolean
  titleRu: string
  titleRuShort: string
  urn: string
  venueState: { titleRu: string; city: { titleRu: string; area: {} } }
}
interface IMatchHeaderCompetitor {
  participant: IStandingParticipant
  priority: number
  results: {
    value: number
    valueType: string
    summaryType: string
    periodType: string
    periodName: string
    summaryTitle: string
    periodTitle: string
    periodPriority: number
  }[]
  place: number
}
interface IMatchTimelineItem {
  absoluteTime: number
  commentary: string
  eventType: string
  matchClock?: string
  matchClockInt?: number
  matchTime?: number
  periodName: string
  periodOrder: number
  periodSrId: string
  periodTitle: string
  stoppageTime?: number
  players?: {
    firstName: string
    fullName: string
    image: string
    lastName: string
    teams: []
    type: string
    urn: string
  }[]
  team?: { id: number; title: string; urn: string }
}
interface IMatchSport {
  backgroundImageUri: string
  color: string
  creationDate: number
  editDate: number
  id: number
  logoImageUri: string
  mobileBackgroundImageUri: string
  name: string
  oldId: string
  published: boolean
  urn: string
  videoPagePriority: number
  videoPagePublished: boolean
}

interface IMatchVideo {
  advertisingPartnerMaterial?: boolean
  id: number
  leadAnnouncement?: string
  publishDate: number
  sportId: number
  tags: number[]
  title: string
  type: string
  urn: string
  videoLink: string
}

interface IMatchNewsItem {
  advertisingPartnerMaterial: boolean
  hideComments: boolean
  hidePreviewImage: boolean
  id: number
  previewImage: { copyright: string; image: string; imageForMobile: string }
  publishDate: number
  sportId: number
  tags: number[]
  title: string
  top: boolean
  type: string
  urn: string
  badge?: string
}
