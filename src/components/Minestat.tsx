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

  ms.init('craft.divnectar.com', 25565, () => {
    console.log("get data")
    console.log(stats)
    serverStats.online = ms.online;
    serverStats.address = ms.address;
    serverStats.port = ms.port;
    serverStats.latency = ms.latency;
    serverStats.version = ms.version;
    serverStats.motd = ms.motd;
    serverStats.current_players = ms.current_players;
    serverStats.max_players = ms.max_players;
    setStats(ms)
    console.log(stats)
  })

  return (
    <div>
      <p><strong>Status:&nbsp;</strong> {stats.online ? ' Offline' : ' Online'}</p>
      <p><strong>Players:&nbsp;</strong>{stats.current_players}/{ " " + stats.max_players} players online</p>
      <p><strong>MOTD:&nbsp;</strong> {stats.motd}</p>
    </div>
  )
}