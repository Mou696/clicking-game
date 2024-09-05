export const defaultUpgradeValues = [
  {name: 'clicker', image: './assets/clicker-white.png', cost: 10, increase: 1, type: "upgrade"},
  {name: 'pickaxe', image: './assets/pickaxe.png', cost: 100, increase: 3, type: "upgrade"},
  {name: 'miner', image: './assets/miner.png', cost: 551, increase: 25, type: "upgrade"},
  {name: 'factory', image: './assets/factory.png', cost: 50000, increase: 230, type: "upgrade"},
  {name: 'potion', image: './assets/potion.png', cost: 600000, increase: 4500, type: "upgrade"},
  {name: 'Nuke', image: './assets/Nuke.png', cost: 1000000, increase: 7000, type: "upgrade"}
]

export const defaultSkillValues = [
  {
   name: "Stronger Clicks",
   description: "Double your clicking power for 30 seconds",
   image: "./assets/skills/skill1.png",
   cd: 600,
   cost: 12000,
   type: "skill"
  },
  {
   name: "Lucky Day",
   description: "Gain 600 x GPS worth of gems instantly",
   image: "./assets/skills/skill1.png",
   cd: 900,
   cost: 480000,
   type: "skill"
  }
 ]
 

export const defaultArtifactValues = [
  {
    name: "Artifact 1",
    description: "Permanently increase all gems gained by x amount",
    image: "",
    type: "artifact"
  }
]