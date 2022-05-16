const mongoose = require("mongoose");

const CharSchema = new mongoose.Schema({
  background: {
    name: { type: String },
    level: { type: Number },
    species: { type: String },
    childhood: { type: String },
    adolescence: { type: String },
    adulthood: { type: String },
    avatar: { type: String },
    description: { type: String },
  },
  life: {
    health: {
      max: { type: Number },
      current: { type: Number },
    },
    sanity: {
      max: { type: Number },
      current: { type: Number },
    },
    mana: {
      max: { type: Number },
      current: { type: Number },
    },
  },
  stats: {
    power: {
      body: { type: Number },
      mind: { type: Number },
      soul: { type: Number },
    },
    resilience: {
      body: { type: Number },
      mind: { type: Number },
      soul: { type: Number },
    },
  },
  otherStats: {
    initialBonus: { type: Number },
    tacticalSpeed: { type: Number },
    corruption: { type: Number },
    prestige: { type: Number },
    damageReduction: { type: Number },
    heroPoints: { type: Number },
    advancementsEarned: { type: Number },
    advancementsUnspent: { type: Number },
  },
  skills: {
    combat: {
      melee: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      ranged: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      spellcasting: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      defend: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
    },
    instinct: {
      athletics: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      notice: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      survival: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
    },
    social: {
      insight: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      intimidation: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      leadership: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      persuasion: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      performance: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
    },
    profession: {
      driving: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      piloting: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      trading: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
    },
    analysis: {
      investigation: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      lore: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
    },
    recovery: {
      healing: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      restoration: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
    },
    skulduggery: {
      stealth: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
      thievery: {
        attribute: {},
        trained: { type: Boolean },
        proficient: { type: Boolean },
        export: { type: Boolean },
        master: { type: Boolean },
      },
    },
  },
  equipment: {
    weapons: [
      {
        name: { type: String },
        attack: { type: String },
        damage: { type: String },
        range: { type: String },
        properties: { type: String },
      },
    ],
    armor: [
      {
        name: { type: String },
        dr: { type: String },
        properties: { type: String },
      },
    ],
    bag: [
      {
        name: { type: String },
        weight: { type: Number },
        location: { type: String },
        notes: { type: String },
      },
    ],
    money: {
      gold: { type: Number },
      silver: { type: Number },
      copper: { type: Number },
    },
  },
  charInfo: {
    injuries: [{ type: String }],
    perks: [
      {
        name: { type: String },
        description: { type: String },
      },
    ],
    flaws: [
      {
        name: { type: String },
        description: { type: String },
      },
    ],
    advancementLog: [{ type: String }],
    spells: [
      {
        name: { type: String },
        description: { type: String },
      },
    ],
    languages: [{ name: { type: String } }],
  },
});

module.exports = mongoose.model("Char", CharSchema);
