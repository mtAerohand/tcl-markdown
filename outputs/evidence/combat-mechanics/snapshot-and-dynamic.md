# Snapshot and Dynamic

**Main Page:**

[Component removed]

## Summons are Not Dynamic and Snapshot on Cast

**By:** Comfy Seaweed\#3841, Pleinair\#8321  
**Added:** [Component removed]  
**Last tested:** [Component removed]

**Comfy’s Findings** \(Comfy Seaweed\#3841\)

**Evidence:** [YouTube](https://youtu.be/-utEL05jfDg)

* Oz's damage with no Bennett's Ult: 1695 \(no CRIT\), 2879 \(CRIT\)
* Oz's damage with Bennett's Ult: 2180 \(no CRIT\), 3705 \(CRIT\)

We know that Bennett's ATK buff refreshes, and thus if Oz was Dynamic, Fischl would need to stay inside the AoE in order to obtain Bennett's ATK buff. However even when Fischl exits \(and thus losing ATK buff\), Oz's damage remains the same.

**Significance:** All buffs are not applied to summon\(s\) if you cast the buffs AFTER the summon\(s\) is already on the field.

**Plenair’s Findings** \(Pleinair\#8321\)

**Editor's Note:** The author did not submit an evidence/proof but accepted the entry as it is a very interesting take on the summons, that Xiangling Pyronado is counted in the same vein as Oz, a summon.

To add to Seaweed I tested this with Xiangling Pyronado along with c6 Diona Q. While its not that big of a surprise- pyronado shares the same attributes and acts as a summon therefore getting the 200 EM

**Significance:** Xiangling can take full advantage of Diona c6 200EM buff without having to be on the field with BOTH of her abilities. This is because both pyronado and gouba will get the 200 EM buff if summoned after Diona's Q. If running an XQ you can use dragonsbane on Xiangling to either: get extra damage on Vaporize, **OR** get a higher multiplier on Melt

## Re-snapshot: Resummoning Oz while he's still active re-snaphots Oz based on Fischl's buffs

**By:** JarJarThinks\#5411

**Evidence:** [YouTube](https://youtu.be/61GvXHVc0D8)

**Significance:** This means that you can potentially update Oz's snapshot to reflect any new buffs, however this also means that if you resummon Oz after losing buffs, Oz will become weaker if he was previously snapshotted with buffs.

## Stats not in details stat page are not snapshot

**By:** Kidz\#8667, Charliex3000\#9403  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_872757681826435132_899103401432989736_transcript-stats-not-in-details-stat-page-are-not-snapshot.html)

**Finding:**  
In general, stats that are not in a Character's "Details" pane do not snapshot. However, the exception is that "Increases All DMG" effects do snapshot, except for the exceptions to this exception: Alley Hunter and Geo Resonance don't snapshot their "Increases All DMG".

Another exception is that Ganyu's A1 "snapshots", because the Frostflake Arrow generated when A1 is active is a completely different internal object than the Frostflake Arrow generated when A1 is inactive. (Additionally, it's not just CA CRIT Rate, because her uncharged CAs don't get the 20% CR buff).

**Evidence:**  
The following stats snapshot:  
[Character Level](https://youtu.be/XLRbNlErGCA)  
[Talent Level](https://youtu.be/aJGU1syC_cs)  
[ATK](./snapshot-and-dynamic.md#summons-are-not-dynamic-and-snapshot-on-cast)  
CRIT Rate: [From GeoMC C1 evidence](https://youtu.be/DBMJEKuABes)  
[CRIT DMG](https://youtu.be/A__SJDUmfhY)  
Elemental DMG%: [See Mistsplitter stacks evidence](https://docs.google.com/spreadsheets/d/12wOAIniEr5D4MvmMU4MwxTm4LxaNUpFAAl6g1iAaLhY/edit#gid=0)  
DMG%: [Alley Flash](https://youtu.be/PR5ZxqHsLOo), [Serpent Spine](https://youtu.be/5FG_OEG8iYA) , [PJWS](https://www.youtube.com/watch?v=muUSsL8gxwU)  
Vape/Melt Reaction%: From [4CWF](https://youtu.be/LTuTDhRyZZw), From [EM](#summons-are-not-dynamic-and-snapshot-on-cast)

The following stats were tested/known to not snapshot:

OL/EC/SC/Swirl%: From [4CWF](https://imgur.com/a/bYtzhH9) \(assumed to be the same for 4TF\), From [EM](https://youtu.be/YkdpSYT9ut0)  
Burst DMG%: From [4EoSF](../../equipment/weapons/polearms.md#engulfing-lightning), From [2NO](https://youtu.be/b0qlPkzjqX0), another [2NO](https://youtu.be/kZ6yBFfnO5M), [Raiden E](https://youtu.be/gNfQm_RQO84), [Solar Pearl](https://youtu.be/5yfQaDVafT8), and [Stringless](https://youtu.be/eG-zOxwdzHw)  
Burst CRIT Rate: From [The Catch](https://youtu.be/e5TM7PlOeDw)  
Skill DMG%: From [Solar Pearl](https://youtu.be/5yfQaDVafT8), and [Stringless](https://youtu.be/vhm1OAFgGA4)  
Skill CRIT Rate: From [Festering Desire](https://youtu.be/0U32uJludm8)  
CA CRIT Rate: [4 Sojourners](https://youtu.be/bwIxrzUnhPE)  
CA DMG%: From [4SR](https://youtu.be/fc8pdCPxTRU), [4WT](https://youtu.be/G0F9SThwDrk), [Amos](https://youtu.be/jWxUvehP47I)  
DMG%: (usually snaps but these two do not) [Alley Hunter](https://youtu.be/GMZtnuvn3X0), [Geo Resonance](https://youtu.be/TpBFUvREWGo)  
Electro CRIT DMG: From [Sara C6](https://www.youtube.com/watch?v=r4ENm19DOPY)

**Significance:**  
More extensive knowledge on what does and does not snapshot.

## Healing over time is snapshot on cast

**By:** Dooners#6709  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_894400995554127882_899195834686636073_transcript-healing-over-time-is-snapshot-on-cast.html)

**Finding:**  
The amount of health healed is snapshot based on the user's stats at the time of activation

**Evidence:**  
Evidence 1: [Video](https://youtu.be/PfNrhAX6wAQ)  
Barbara's Elemental Skill healing is based on her max HP. Barbara with a Twin Nephrite (CRIT Rate bonus) heals for 2204 HP per tick. After using the Skill, she switching to TTDS (hp% bonus), and the next tick is still 2204 HP.

Evidence 2: [Video](https://youtu.be/xG_V_Mhj0LI)  
Jean's Elemental Burst healing is based on her attack. Using an ER weapon and missing ATK% artifacts, each tick heals for 818 HP. Switching to Amenoma (ATK% bonus) and equipping artifacts with ATK% bonuses does not change the tick rate

Evidence 3: [Video](https://youtu.be/o1IPLUndpZc)  
Bennett's Elemental Burst healing is based on his max HP. Using Elemental Burst while missing artifacts tick for 2587 HP, equipping artifacts that give max HP% does not increase healing amount

Evidence 4: [Video](https://youtu.be/ieM7cBJBq2M)  
Diona's Elemental Burst healing is based on her max HP. Using the Burst with 25568 HP and 4-Piece maiden's beloved healed for 3957 HP per tick, changing artifacts that reduced her max HP to 19392 (keeping maiden's 4-Piece) does not reduce the tick rate.

Evidence 5: [Video](https://youtu.be/jzn3R6p_LJQ)  
Qiqi's Elemental Skill healing over time is based on her attack. Using a level 1 Favonius sword then casting the Skill healed for 2065 HP, then changing to The Flute, an attack% weapon, did not change the tick amount.

Evidence 6: [Video](https://youtu.be/6_VfeWEM-zE)  
The healing effectiveness stat from 2-Piece maiden's beloved also snapshots. Diona with 15591 max HP with 2-Piece maiden's ticks for 2453 HP, taking off one piece of maiden's beloved, which did not reduce her max HP but makes her lose the set bonus, does not change the healing ticks

Bonus - Noelle, Qiqi, and Barbara also have a healing-on-hit effect while their Elemental Skill is active. Do on-hit healing effects from active Skills snapshot?

Evidence S1: [Video](https://youtu.be/N41DVWpP8z8)  
Whiteblind grants Noelle 7.5% ATK and 7.5% DEF on-hit, and her on-hit healing scales on DEF. Here I use the Burst to ensure that she heals every hit. Each consecutive hit is shown to heal for an increasing amount, capping at hit 4 which corresponds to the max stacks of whiteblind. Noelle on-hit-healing does not snapshot on E activation.

Evidence S2: [Video](https://youtu.be/0zb7wmWQjX4)  
Similarly, Prototype Rancour increases ATK and DEF every hit, and Qiqi's on-hit healing scales on ATK. Each consecutive hit heals for the exact same amount of health, meaning that Qiqi on-hit-healing snapshots on E activation.

Evidence S3: [Video](https://youtu.be/EbGt_n5_Qrk)  
Barbara on-hit healing from her Skill scales on maximum HP, so I equipped her with a level one Thrilling Tales of Dragon Slayers, activated her Skill, attacked an enemy, leveled the weapon, and attacked the same enemy again. She healed for 364 HP per hit before and after leveling the weapon, showing that Barbara on-hit healing snapshots on E activation.

Barbara and Qiqi Skills function extremely similarly, and their snapshotting mechanics also seems to be the same.

**Significance:**  
Mostly fluff, since you can't switch out weapons or artifacts in abyss/during combat. One practical use-case is when you have both Jean and Bennett in the same team, using Bennett Burst first followed by Jean's Burst will increase the amount of healing done by Dandelion Breeze, compared to the other way around.