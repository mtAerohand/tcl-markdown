# Snapshot & Dynamic

## Snapshot & Dynamic

**Snapshot** and **Dynamic** are properties assigned to Elemental Skills and Bursts that last over time. Talents that **snapshot** use the character's stats when cast, and will continue to use those stats regardless of buffs gained or lost in that timeframe after it is cast.

**Dynamic** talents continuously update their damage calculations based on the character's stats in real time.

Healing effects also snapshot based on the user's stats at the time of activation.

In general, stats that are **not** in a character's "Details" page **do not snapshot**. However, the exception is that "Increases All DMG" effects do snapshot, except for the exceptions to this exception: Alley Hunter, Fading Twilight, and Geo Resonance don't snapshot their "Increases All DMG".

Another exception is that Ganyu's A1 "snapshots", because the Frostflake Arrow generated when A1 is active is a completely different internal object than the Frostflake Arrow generated when A1 is inactive. (Additionally, it's not just CA CRIT Rate, because her uncharged CAs don't get the 20% CR buff).

## Buffs

**Static Buffs** either do not scale off any attribute or snapshots the attribute the buff scales off at cast time.

**Dynamic Buffs** update according to the attribute the buff scales off.

**Direct Buffs** do not change the stats of the character, and instead directly affect the damage output of the character after a snapshotting Skill/Burst is cast. These buffs include:

<details>
<summary>Static Buffs</summary>

* Albedo
  * Ascension 4 Passive: Homuncular Nature - Elemental Mastery
* Ayaka
  * Ascension 4 Passive: Kanten Senmyou Blessing - Cryo DMG Bonus
* Barbara
  * Constellation 2: Vitality Burst - Hydro DMG Bonus
* Bennett
  * Elemental Burst: Fantastic Voyage - ATK Bonus
  * Constellation 6: Fire Ventures With Me - Pyro DMG Bonus
* Diona
  * Constellation 6: Cat's Tail Closing Time - Elemental Mastery Bonus
* Ganyu
  * Ascension 4 Passive: Harmony between Heaven and Earth - Cryo DMG Bonus
* Hu Tao
  * Ascension 4 Passive: Flutter By - CRIT Rate
  * Constellation 4: Garden of Eternal Rest - CRIT Rate
* Kazuha
  * Ascension 4 Passive: Poetics of Fuubutsu - Elemental DMG Bonus
  * Constellation 2: Yamaarashi Tailwind - Elemental Mastery
* Klee
  * Constellation 6: Blazing Delight - Pyro DMG Bonus
* Kokomi
  * Constellation 6: Sango Isshin - Hydro DMG Bonus
* Kujou Sara
  * Elemental Skill: Tengu Stormcall - ATK Bonus
  * Constellation 6: Sin of Pride - Electro CRIT DMG
* Mona
  * Constellation 4: Prophecy of Oblivion - CRIT Rate
* Ningguang
  * Ascension 4 Passive: Strategic Reserve - Geo DMG Bonus
* Noelle
  * Elemental Burst: Sweeping Time - ATK Bonus
  * Constellation 6: Must Be Spotless - ATK Bonus
* Raiden
  * Elemental Skill: Transcendence: Baleful Omen - Elemental Burst DMG Bonus
* Rosaria
  * Ascension 1 Passive: Regina Probationum - CRIT Rate
  * Ascension 4 Passive: Shadow Samaritan - CRIT Rate
* Shenhe
  * Ascension 4 Passive: Spirit Communion Seal (Press) - Elemental Skill and Elemental Burst DMG Bonus
* Sucrose
  * Ascension 1 Passive: Catalyst Conversion - Elemental Mastery Bonus
  * Ascension 4 Passive: Mollis Favonius - Elemental Mastery Bonus
* Traveler \(Geo\)
  * Constellation 1: Invincible Stonewall - CRIT Rate
* Venti
  * Constellation 4: Hurricane of Freedom - Anemo DMG Bonus
* Xinyan
  * Ascension 4 Passive: "...Now That's Rock 'N' Roll!" - Phys DMG Bonus
* Yelan
  Ascension 4 Passive: Adapt With Ease - DMG Bonus

</details>

<details>
<summary>Dynamic Buffs</summary>

* Shenhe
  * Elemental Skill: Spring Spirit Summoning - DMG Bonus of Cryo Attacks
* Yun Jin
  * Elemental Burst: Cliffbreaker's Banner - DMG Bonus of Normal Attacks

</details>

<details>
<summary>Direct Buffs</summary>

* Raiden
  * Elemental Skill: Transcendence: Baleful Omen - Elemental Burst DMG Bonus
* Shenhe

  * Elemental Skill: Spring Spirit Summoning - DMG Bonus of Cryo Attacks
  * 4th Ascension Passive: Spirit Communion Seal (Press) - Elemental Skill and Elemental Burst DMG Bonus
  * Constellation 2: Centered Spirit - Cryo CRIT DMG

* 4-Piece [Blizzard Strayer](../equipment/artifacts.md#blizzard-strayer) passive - CRIT Rate
* Cryo Elemental Resonance (Shattering Ice) - CRIT Rate

</details>

## Snapshot Timing Sheet

[View spreadsheet](https://docs.google.com/spreadsheets/d/1M2nTLogzYd2o4ZLkYEkzfovwiTznQOB5ujWuMlQbE0k)

## Dynamic Transformative Reactions

[Transformative Reactions](elemental-effects/transformative-reactions.md) do not snapshot EM as of patch 1.4. Even if a Skill snapshots, their EM will update real time.  
Transformative Reactions include: [Overload](elemental-effects/transformative-reactions.md#overloaded), [Superconduct](elemental-effects/transformative-reactions.md#superconduct), [Electro-Charged](elemental-effects/transformative-reactions.md#electro-charged), [Shatter](elemental-effects/transformative-reactions.md#shatter), [Swirl](elemental-effects/transformative-reactions.md#swirl), and [Crystallize](elemental-effects/transformative-reactions.md#crystallize).

> Fischl summons Oz outside of Bennett's Burst. Oz deals 920 Electro damage and 1870 on Overloads. Sucrose shares EM with Fischl and Fischl steps into Bennett's Burst. Oz **still** deals 920 Electro damage, but **Overload damage has been increased** to 1900.

## Talents

### Snapshotting Talents



|                         Character                          | Ability                                                   | Notes                                                |
| :--------------------------------------------------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|        [Component removed]        | Elemental Skill: Abiogenesis: Solar Isotoma               | Transient Blossom DMG                                |
|        [Component removed]        | Elemental Skill: Explosive Puppet                         | Explosion DMG                                        |
|                                                            | Elemental Burst: Fiery Rain                               | Fiery Rain DMG Per Wave                              |
|   [Component removed]    | Elemental Burst: Kamisato Art: Soumetsu                   | Cutting DMG and Bloom DMG                            |
|   [Component removed]   | Elemental Skill: Kamisato Art: Kyouka                     | Water Illusion DMG                                   |
|                                                            | Elemental Burst: Kamisato Art: Suiyuu                     | Bloomwater DMG                                       |
|      [Component removed]      | Elemental Burst: Stormbreaker                             | Lightning DMG                                        |
|        [Component removed]        | Elemental Burst: Dawn                                     | DoT and Explosion DMG                                |
|        [Component removed]        | Elemental Burst: Signature Mix                            | Continuous Field DMG                                 |
|      [Component removed]      | Elemental Skill: Nightrider                               | Oz's ATK DMG                                         |
|        [Component removed]        | Elemental Skill: Trail of the Qilin                       | Skill DMG                                            |
|                                                            | Elemental Burst: Celestial Shower                         | Ice Shard DMG                                        |
|  [Component removed]  | Elemental Burst: Windmuster Kick                          | Fudou Style Vacuum Slugger and Windmuster Iris DMG   |
|        [Component removed]        | Elemental Burst: Dandelion Breeze                         | Field Entering/Exiting DMG                           |
|        [Component removed]        | Elemental Burst: Glacial Waltz                            | Skill DMG                                            |
|  [Component removed]  | Elemental Burst: Kazuha Slash                             | DoT and Additional Elemental DMG                     |
|        [Component removed]         | Elemental Skill: Jumpty Dumpty                            | Mine DMG                                             |
| [Component removed] | Elemental Skill: Kurage's Oath                            | Regeneration and Ripple DMG                          |
|       [Component removed]       | Elemental Skill: Violet Arc                               | Skill DMG                                            |
|                                                            | Elemental Burst: Lightning Rose                           | Discharge DMG                                        |
|        [Component removed]        | Elemental Skill: Mirror Reflection of Doom                | Damage over Time and Explosion Damage                |
|        [Component removed]         | Elemental Skill: Adeptus Art: Herald of Frost             | Herald of Frost DMG and Healing over time and on-hit |
|       [Component removed]       | Elemental Burst: Rites of Termination                     | Ice Lance DoT                                        |
|        [Component removed]        | Elemental Burst: Yoohoo Art: Mujina Flurry                | DMG and Healing                                      |
|   [Component removed]   | Elemental Burst: Gyoei Narukami Kariyama Rite             | DMG                                                  |
|      [Component removed]       | Elemental Burst: Forbidden Creation - Isomer 75 / Type II | DoT and Additional Elemental DMG                     |
|       [Component removed]        | Elemental Burst: Wind's Grand Ode                         | Damage over Time and Additional Elemental DMG        |
|      [Component removed]      | Elemental Skill: Guoba Attack                             | DMG                                                  |
|                                                            | Elemental Burst: Pyronado                                 | Pyronade DMG                                         |
|       [Component removed]        | Elemental Skill: Dominus Lapidis                          | Stone Stele Resonance DMG                            |

### Dynamic Talents

|                        Character                        | Ability                                            | Notes                                   |
| :-----------------------------------------------------: | -------------------------------------------------- | --------------------------------------- |
|       [Component removed]       | Elemental Burst: Glacial Illumination              | Lightfall Sword Base DMG and Stack DMG  |
|    [Component removed]     | Elemental Burst: Midnight Phantasmagoria           | Falling Thunder DMG                     |
|      [Component removed]      | Elemental Skill: Guide to Afterlife                | Blood Blossom DMG                       |
|    [Component removed]     | Elemental Burst: Starward Sword                    | Burst DMG                               |
|      [Component removed]       | Elemental Burst: Stellaris Phantasm                | Burst DMG                               |
|       [Component removed]       | Elemental Burst: Adeptus Art: Preserver of Fortune | Healing                                 |
| [Component removed] | Elemental Burst: Secret art: Musou Shinsetsu       | Burst DMG                               |
|                                                         | Elemental Skill: Transcendence: Baleful Omen       | Coordinated DMG                         |
|     [Component removed]     | Elemental Burst: Lightning Fang                    | Soul Companion DMG                      |
| [Component removed]  | Elemental Skill: Sanctifying Ring                  | Grass Ring of Sanctification DMG        |
|    [Component removed]    | Normal Attack Skill: Cutting Torrent               | Riptide Flash DMG and Riptide Burst DMG |
|                                                         | Elemental Skill: Foul Legacy: Raging Tide          | Riptide Slash DMG                       |
|                                                         | Elemental Burst: Havoc: Obliteration               | Riptide Blast DMG                       |
|      [Component removed]       | Elemental Burst: Crimson Ooyoroi                   | Fiery Collapse DMG                      |
|    [Component removed]     | C2: Oil Meets Fire                                 | DMG                                     |
|     [Component removed]     | Elemental Burst: Guhua Sword: Raincutter           | Rain Sword DMG                          |
|      [Component removed]      | Elemental Skill: Sweeping Fervor                   | Shield's DoT                            |
|                                                         | Elemental Burst: Riff Revolution                   | Pyro DoT                                |
|   [Component removed]    | Elemental Skill: Yakan Evocation: Sesshou Sakura   | Sesshou Sakura DMG                      |
|                                                         | Elemental Burst: Great Secret Art: Tenko Kenshin   | Tenko Thunderbolt DMG                   |
|      [Component removed]      | Elemental Burst: Depth-Clarion Dice                | Exquisite Throw DMG                     |
|     [Component removed]      | Elemental Burst: Ryuukin Saxifrage                 | Aurous Blaze Explosion DMG              |

## Evidence Vault

[Component removed]