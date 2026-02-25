// web/src/routes.ts
import type { RouteRecordRaw } from 'vue-router'

import Layout from './layouts/Layout.vue'

import Home from './views/Home.vue'
import TierList from './views/TierList.vue'
import Tournaments from './views/Tournaments.vue'
import TopDecks from './views/TopDecks.vue'
import TopCards from './views/TopCards.vue'
import PlayerRanking from './views/PlayerRanking.vue'
import CountryRanking from './views/CountryRanking.vue'

const langs = ['zh', 'en'] as const

function makeLangRoutes(lang: (typeof langs)[number]): RouteRecordRaw {
  return {
    path: `/${lang}`,
    component: Layout,
    children: [
      { path: '', name: `${lang}-home`, component: Home },

      { path: 'tier-list', name: `${lang}-tier-list`, component: TierList, meta: { nav: true, key: 'tierList' } },
      { path: 'tournaments', name: `${lang}-tournaments`, component: Tournaments, meta: { nav: true, key: 'tournaments' } },
      { path: 'top-decks', name: `${lang}-top-decks`, component: TopDecks, meta: { nav: true, key: 'topDecks' } },
      { path: 'top-cards', name: `${lang}-top-cards`, component: TopCards, meta: { nav: true, key: 'topCards' } },
      { path: 'player-ranking', name: `${lang}-player-ranking`, component: PlayerRanking, meta: { nav: true, key: 'playerRanking' } },
      { path: 'country-ranking', name: `${lang}-country-ranking`, component: CountryRanking, meta: { nav: true, key: 'countryRanking' } },
    ],
  }
}

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/zh' },
  ...langs.map(makeLangRoutes),
]