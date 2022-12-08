import { FETCH_GET_MATCHES_URL } from '~/constants/api'
import type { IMatchesResponce, IMatchesSeasons } from '~/interfaces/matches.interface'
import type { IEvent } from '~/interfaces/standings.interface'

const urns = ['mls', 'epl', 'rpl', 'russia-cup', 'uefa-champions-league', 'uefa-supercup', 'uefa-europa-league', 'uefa-europa-conference-league-international-clubs', 'russia-supercup', 'england-supercup', 'primera-division', 'seria-a', 'bundesliga', 'germany-supercup', 'france-supercup', 'league-1', 'uefa-championship', 'uefa-european-championship-qualifications', 'netherlands-supercup', 'uefa-nations-league', 'portugal-supercup', 'world-cup-qualification-europe', 'worldcup', 'world-cup-qualification-south-america', 'copa-america', 'fa-cup', 'concacaf-cup', 'club-world-cup', 'africa-cup', 'efl-cup', 'coppa-italia', 'dfb-pokal', 'copa-del-rey', 'international-friendly', 'coupe-de-france', 'turkish-super-lig', 'coupe-de-la-ligue', 'spain-supercup', 'italy-supercup', 'eredivisie', 'portugalia', 'medialeague', 'netherlands-cup', 'portugal-cup']

export default defineEventHandler(async (event) => {
  const url = `${FETCH_GET_MATCHES_URL}?onDate=${event.context.params.date}&sportUrn=football&publishMatchbar=true`
  const data = await $fetch<IMatchesResponce>(url, { method: 'GET' })

  const seasons = setSeasons(data.seasons)
  const items = setMatches(data.seasons, data.items)
  const newData = {
    competitions: seasons,
    participants: data.participants,
    items,
  }

  return newData
})

function setSeasons(seasons: IMatchesSeasons) {
  const newSeasons: IMatchesSeasons = {}
  for (const season in seasons) {
    if (urns.length) {
      if (urns.includes(seasons[season].competition.urn || ''))
        newSeasons[season] = seasons[season]
    }
    else {
      newSeasons[season] = seasons[season]
    }
  }
  return newSeasons
}

function setMatches(seasons: IMatchesSeasons, items: IEvent[]) {
  const newMatches = items.filter(item => urns.includes(seasons[item.seasonId].competition.urn))
  newMatches.forEach(m => m.competitors.sort((a, b) => a.priority - b.priority))
  return newMatches
}
