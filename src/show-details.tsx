import { useParams } from "react-router-dom"
import { ShowDetailsCard } from "./components/show-details-card"

export const ShowDetails = () => {
    const { showId } = useParams()
    return (
        <>
            Show details from {showId} here!
            {episodes.map(({ season, title, summary, id, duration }) =>
                <ShowDetailsCard
                    key={id}
                    title={title}
                    season={season}
                    id={id}
                    duration={duration}
                    summary={summary}
                />
            )}
        </>
    )
}

const episodes = [
    {
        "id": 1,
        "title": "The Mystery of the Lost Key",
        "season": 1,
        "duration": 50,
        "airdate": "2024-04-22T18:00:00Z",
        "summary": "A key disappears. A mystery unfolds. Detective Smith is on the case. Will she crack it in time? Follow the clues, uncover the truth, and experience the thrill of solving The Mystery of the Lost Key.",
        "writer": "Alex Johnson",
        "director": "Emily Smith",
        "rating": 4.5
    },
    {
        "id": 2,
        "title": "Into the Unknown",
        "season": 1,
        "duration": 45,
        "airdate": "2024-04-23T19:00:00Z",
        "summary": "A group of adventurers embarks on a perilous journey into uncharted territories, facing dangers at every turn. Will they conquer the unknown or succumb to its mysteries? Discover the answers in Into the Unknown.",
        "writer": "Michael Brown",
        "director": "Sarah Thompson",
        "rating": 4.2
    },
    {
        "id": 3,
        "title": "The Haunted Mansion",
        "season": 1,
        "duration": 55,
        "airdate": "2024-04-24T20:00:00Z",
        "summary": "A family moves into a mansion with a dark past, only to discover it's haunted by vengeful spirits. As the mysteries unravel and the hauntings escalate, they must confront their fears or be consumed by The Haunted Mansion.",
        "writer": "Jennifer Lee",
        "director": "David Garcia",
        "rating": 4.7
    },
    {
        "id": 4,
        "title": "Secrets of the Forest",
        "season": 1,
        "duration": 48,
        "airdate": "2024-04-25T21:00:00Z",
        "summary": "Deep in the forest lies hidden treasures and ancient mysteries waiting to be uncovered. Join the expedition as they navigate through the Secrets of the Forest, where every discovery brings new adventures.",
        "writer": "Daniel White",
        "director": "Sophia Rodriguez",
        "rating": 4.0
    },
    {
        "id": 5,
        "title": "The Curse of Blackwater Manor",
        "season": 1,
        "duration": 52,
        "airdate": "2024-04-26T22:00:00Z",
        "summary": "An old curse reawakens when a family inherits an eerie manor, leading to a battle against evil forces. Can they break the curse before it consumes them? Experience The Curse of Blackwater Manor to find out.",
        "writer": "Emma Wilson",
        "director": "James Brown",
        "rating": 4.8
    },
    {
        "id": 6,
        "title": "Under the Starlit Sky",
        "season": 1,
        "duration": 55,
        "airdate": "2024-04-27T23:00:00Z",
        "summary": "A romantic drama unfolds beneath the twinkling stars, exploring love and destiny. Follow the journey of two souls as they navigate the complexities of relationships Under the Starlit Sky.",
        "writer": "Olivia Green",
        "director": "Michael Clark",
        "rating": 4.3
    },
    {
        "id": 7,
        "title": "Echoes from the Past",
        "season": 1,
        "duration": 50,
        "airdate": "2024-04-28T00:00:00Z",
        "summary": "The ghosts of history come alive as a group of historians delve into forgotten tales. Explore the echoes of the past and uncover hidden truths in Echoes from the Past.",
        "writer": "Ryan Taylor",
        "director": "Jessica Martinez",
        "rating": 4.6
    },
    {
        "id": 8,
        "title": "The Final Confrontation",
        "season": 1,
        "duration": 45,
        "airdate": "2024-04-29T01:00:00Z",
        "summary": "The ultimate battle between good and evil reaches its climax, determining the fate of the world. Brace yourself for The Final Confrontation, where heroes rise and villains fall in the epic struggle for supremacy.",
        "writer": "Sophie Adams",
        "director": "William Johnson",
        "rating": 4.9
    },
    {
        "id": 9,
        "title": "Lost in Time",
        "season": 1,
        "duration": 58,
        "airdate": "2024-04-30T02:00:00Z",
        "summary": "A time-traveling adventure takes a group of friends on a journey through history's most pivotal moments. Witness the chaos and the beauty as they become Lost in Time.",
        "writer": "Jacob Roberts",
        "director": "Emily Turner",
        "rating": 4.4
    },
    {
        "id": 10,
        "title": "The Enigma of the Missing Artifact",
        "season": 1,
        "duration": 50,
        "airdate": "2024-05-01T03:00:00Z",
        "summary": "A museum heist unveils a larger conspiracy, leading detectives on a chase to recover a priceless artifact. Dive into The Enigma of the Missing Artifact and unravel the mystery before time runs out.",
        "writer": "Charlotte Brown",
        "director": "Andrew Wilson",
        "rating": 4.7
    },
    {
        "id": 11,
        "title": "Whispers in the Dark",
        "season": 1,
        "duration": 45,
        "airdate": "2024-05-02T04:00:00Z",
        "summary": "Strange occurrences plague a small town, hinting at dark secrets hidden within its shadows. Listen closely to the Whispers in the Dark, for they hold the key to unlocking the town's sinister past.",
        "writer": "Lucas Parker",
        "director": "Sophia White",
        "rating": 4.2
    },
    {
        "id": 12,
        "title": "The Island of Eternal Youth",
        "season": 1,
        "duration": 55,
        "airdate": "2024-05-03T05:00:00Z",
        "summary": "Legends come to life as a group of adventurers discovers a mystical island where time stands still. Join the journey to The Island of Eternal Youth, where dreams never fade and youth knows no bounds.",
        "writer": "Ethan Martin",
        "director": "Natalie Garcia",
        "rating": 4.6
    },
    {
        "id": 13,
        "title": "A Dance with Destiny",
        "season": 1,
        "duration": 48,
        "airdate": "2024-05-04T06:00:00Z",
        "summary": "Love, passion, and betrayal intertwine as dancers vie for success in the competitive world of ballroom. Experience the drama and the elegance in A Dance with Destiny.",
        "writer": "Ava Robinson",
        "director": "Daniel Clark",
        "rating": 4.3
    },
    {
        "id": 14,
        "title": "Shadows of the Past",
        "season": 1,
        "duration": 52,
        "airdate": "2024-05-05T07:00:00Z",
        "summary": "A detective's past comes back to haunt him as he investigates a series of gruesome murders. Follow the shadows of the past to uncover the truth in Shadows of the Past.",
        "writer": "Liam Wilson",
        "director": "Emma Thompson",
        "rating": 4.8
    },
    {
        "id": 15,
        "title": "The Forbidden Forest",
        "season": 1,
        "duration": 55,
        "airdate": "2024-05-06T08:00:00Z",
        "summary": "A young hero braves the dangers of the forbidden forest in search of a legendary artifact. Dive into the depths of The Forbidden Forest and discover the power of courage.",
        "writer": "Mia Harris",
        "director": "Jacob Martinez",
        "rating": 4.5
    },
    {
        "id": 16,
        "title": "Echoes of War",
        "season": 1,
        "duration": 50,
        "airdate": "2024-05-07T09:00:00Z",
        "summary": "The scars of war run deep as soldiers struggle to find peace in the aftermath of battle. Listen to the Echoes of War and witness the resilience of the human spirit.",
        "writer": "Noah Thompson",
        "director": "Sophie Parker",
        "rating": 4.1
    },
    {
        "id": 17,
        "title": "The Whispering Woods",
        "season": 1,
        "duration": 45,
        "airdate": "2024-05-08T10:00:00Z",
        "summary": "A journey through the mystical woods leads to encounters with magical creatures and ancient spirits. Hear the whispers of The Whispering Woods and unlock the secrets of nature.",
        "writer": "Isabella Johnson",
        "director": "Ethan Brown",
        "rating": 4.4
    },
    {
        "id": 18,
        "title": "The Phantom's Revenge",
        "season": 1,
        "duration": 55,
        "airdate": "2024-05-09T11:00:00Z",
        "summary": "A masked vigilante seeks vengeance against those who wronged him, striking fear into the hearts of criminals. Witness The Phantom's Revenge and the price of justice.",
        "writer": "William Garcia",
        "director": "Olivia Taylor",
        "rating": 4.7
    },
    {
        "id": 19,
        "title": "Lost Souls",
        "season": 1,
        "duration": 48,
        "airdate": "2024-05-10T12:00:00Z",
        "summary": "Ghosts of the past haunt a forgotten town, revealing tragic tales of lost love and broken dreams. Search for redemption in the souls that wander through Lost Souls.",
        "writer": "Jack Robinson",
        "director": "Emily Harris",
        "rating": 4.3
    },
    {
        "id": 20,
        "title": "The Midnight Carnival",
        "season": 1,
        "duration": 52,
        "airdate": "2024-05-11T13:00:00Z",
        "summary": "A mysterious carnival arrives in town, promising thrills and chills under the moonlit sky. Explore the wonders and the terrors of The Midnight Carnival.",
        "writer": "Sophia Turner",
        "director": "Lucas Adams",
        "rating": 4.6
    }
]
