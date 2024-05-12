import { HttpResponse, http } from 'msw'
import {setupServer} from 'msw/node'

import seasonEpisodes from './season-episodes.json'
import seasonTwoEpisodes from './season-two-episodes.json'

export const restHandlers = [
    // http.get('https://https://api.tvmaze.com/seasons/7/episodes', ()=>{
    http.get('undefined/seasons/7/episodes', ()=>{
        return HttpResponse.json(seasonEpisodes)
    }),
    http.get('undefined/seasons/4382/episodes', ()=>{
        return HttpResponse.json(seasonTwoEpisodes)
    })
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(()=> server.listen({onUnhandledRequest:'error'}))

// Close server after all tests
afterAll(()=> server.close())

// Reset handlers after each test `important for test isolation`
afterEach(()=> server.resetHandlers())