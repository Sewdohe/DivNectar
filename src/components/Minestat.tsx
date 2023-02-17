import React, { useEffect, useState } from 'react'

// @ts-ignore
import ms from 'minestat'

interface ServerStats {
  online?: boolean,
  address?: string,
  port?: number,
  latency?: number,
  version?: string,
  motd?: string,
  current_players?: string,
  max_players?: string
}

let serverStats: ServerStats = {};


export const Minestat = () => {
  const [stats, setStats] = useState(serverStats)

  function getStats() {
    let tempStats = {}
    ms.init('craft.divnectar.com', 25565, () => {
      tempStats = {
        online: ms.online,
        current_players: ms.current_players
      }
    })
    console.log(tempStats)
    setStats(tempStats)
  }

  return (
    <div>
      <p><strong>Status:&nbsp;</strong> {stats.online ? ' Offline' : ' Online'}</p>
      <p><strong>Players:&nbsp;</strong>{stats.current_players}/{ " " + stats.max_players} players online</p>
      <p><strong>MOTD:&nbsp;</strong> {stats.motd}</p>
    </div>
  )
}