# Ningguang

**Main Page:**

[Component removed]

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/12y2e2JkN55UOpbMeTpx1EmqqN9zdfPf3jLLpo9YKxnE/edit?usp=sharing) - Kolibri\#7675

## Charged Attack Mechanics

### Star Jades Have The Charged Attack Tag

**By:** Asaki\#9139  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_940671732979757087_945067939927826443_transcript-star-jades-have-ca-tag.html)

**Finding:**  
Ningguang's Star Jades are considered Charged ATK DMG

**Evidence:**  
_credit to Zafiast\#0327 and andru\#1175_

1. Non C6 Ningguang [Imgur](https://imgur.com/gallery/fMo7va7)
2. C6 Ningguang [Imgur](https://imgur.com/62azWJq)

**Significance:**  
Star Jades benefit from Charged Attack DMG Bonuses.

### Ningguangs Can Manipulate Star Jades Direction

**By:** Rathalos\#2875  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/ningguangs-can-manipulate-star-jades-direction)

**Finding:**  
Ningguang produces star jades from her Normal Attack talent and sixth Constellation. The direction these star jades take can be manipulated with the use of directional inputs (moving left, right or backwards) immediately after using a Charged Attack. This can potentially make star jades directly miss targets even at point-black range.

However, immediately targeting an enemy by attacking them can make the star jades swerve or take sharp turns to hit the targeted enemy. This only seems to be possible for regular star jades, as star jades generated from c6 do not seem to be able to swerve after targeting an enemy.

**Evidence:**  
[YouTube](https://youtu.be/Ngjj83gc3J4)  
[Imgur](https://imgur.com/wXLy7ZC) (mobile footage from Lit#1924)  
[Imgur](https://imgur.com/MWKPuhy) (c6 star jades not swerving)

**Significance:**  
Ningguang's star jades constitute a relevant portion of her damage. Knowing how to manipulate these can potentially be helpful, and knowing how it works can mitigate damage loss from missing targets.

### Star Jade Creation And Consumption

**By:** an odd medium\#6288  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/star-jade-creation-and-consumption)

**Findings:**  
1. Star Jade creation and CA Stamina deduction are server-side. The consumption of Star Jades to produce projectiles is client-side.
2. Ningguang does not benefit from her A1 if she gains Star Jades after a certain cutoff frame from the beginning of her CA animation. This cutoff frame is dependent on the variant of CA she performs [1]. Despite this, Ningguang is still able to launch her Star Jades. [2]
3. Ningguang's NA projectiles generate Star Jades with an ICD dependent on ping (6-10 frames on ~196ms) [3], and can be triggered twice per NA (one for each projectile) by delaying their hit times.
   * As such, it is possible for a single NA to generate two Star Jades. [4]
   * This is possible for all Constellations [5], however, the larger AOE from C1 makes registering hits easier.

**Evidence:**  
1. [YouTube](https://youtu.be/eUIJZH_O_e4): creation and consumption with and without an internet connection.
2. Star Jades can be launched without benefiting from Ningguang's A1:
   * \[1\] [Google Sheets](https://docs.google.com/spreadsheets/d/1b9VdFN5xyfgW19rSyuZfPUzDfJkc8CcSNTtZ31eP5Jg): See sheet "Star Jade Consumption (CA A1 Cutoff)".
     * Frame for each CA variant after which A1 no longer applies:  
       * CA Twirl: 15-16
       * CA Left: 10
       * CA Right: 10
   * \[2\] [YouTube](https://www.youtube.com/watch?v=30Sw2fSPfwE): Instances of Stamina drain while in possession of Star Jades - 0:09, 0:34, 0:49.
3. Star Jade Generation ICD:
    * \[3\] [Google Sheets](https://docs.google.com/spreadsheets/d/1b9VdFN5xyfgW19rSyuZfPUzDfJkc8CcSNTtZ31eP5Jg): See sheet "NA Projectile ICD (Double Jade)".
    * \[4\] [YouTube](https://youtu.be/9VY4NmX8YN8): Double Jade working on Inazuma stove, utilizing back wall for hit delay.
    * \[5\] [YouTube](https://youtu.be/f0Q7xeWIAFg): Double Jade working as expected for C0, demonstrating that C1 AOE does not affect the ICD trigger.
    * \[6\] [YouTube](https://youtu.be/Qhnk5-FX1Oc): Double Jade utilizing N2C in combat.

**Significance:**  
1. Better understanding of Star Jade creation and consumption and their dependence on ping.
2. Clarifies why Stamina drain may still occur despite Ningguang being in possession of Star Jades before her CA projectile is fired [2]. As such, N1C spam is not guaranteed to be Stamina-less if her CA is cast too quickly.
3. The low ICD can be used (situationally) to generate more than one Star Jade per NA against certain enemies. Improves the DPS of N1C and N2C combos; though it is more reliable when hitting overlapping hitboxes, or at an angle such that each Jade hit is delayed.
   * E.g: N2C generating 3 Star Jades against a boss enemy hitbox (Aeonblight Drake). [6]

## Skill Mechanics

### Jade Screen ICD

**By:** Goden\#2155  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_929477312284618822_931062924217315359_transcript-jade-screen-icd.html)

**Finding:**  
Ningguang's Jade Screen has no ICD for the detection of aura-checks.

**Evidence:**

* [Imgur](https://imgur.com/a/fP9lMU8) - The aura-check ticks shown here overlap 2 ticks in the same frame, showing that it can detect several in an extremely short impulse.
* [Imgur](https://imgur.com/a/sgoXz0X) - The ticks shown here on the contrary are fairly evenly spaced, demonstrating that the delay between ticks can be extremely low and still registered.

**Significance:**  
Combining the demonstrations of both of these tests, it can be concluded that Ningguang's Jade Screen has no ICD on detection of aura-checks.

## Burst Mechanics

### Ningguang Burst Does Snapshot

**By:** jamberry\#7142, Isu\#6867, Ai\#7362, Bobrokrot\#0111  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_857491520109543444_858198283566186516_transcript-ningguang-e-q-snapshot.html)

**Finding:**  
Ningguang’s E screen snapshots her stats on cast, and with Q use her personal gems will snapshot on Q cast while her screen’s gems will use her screen’s earlier snapshotted stats. This finding corrects the previous TCL finding that Ningguang’s Q does not snapshot, since the evidence for that finding did not account for the gems from her screen not receiving the buff they were using to test for snapshotting.

**Evidence:**  
[Video](https://www.youtube.com/watch?v=L7c4zvk6wXs) from jamberry\#7142  
Initial gems directly from Ningguang deal 774 damage, while gems from her E screen deal only 231 damage, due to Ningguang receiving Bennett's buff after E cast and snapshot.

[Video](https://www.youtube.com/watch?v=ocjfZ22VcHk) from Isu\#6867  
Ningguang’s gems deal 129 on non CRIT, 203 on CRIT in an initial unbuffed reference cast. Ningguang receives Bennett buff, and then casts Q, losing Bennett buff after Q cast but while gems travel to target. Ningguang’s gems deal 861 on non CRIT, 1346 on CRIT despite losing Bennett buff before the gems connect.

[Video](https://www.youtube.com/watch?v=-xph9HrOD5U) and [Video](https://www.youtube.com/watch?v=nowih1jXLpw) from Ai\#7362  
First video shows Ningguang’s gems deal 441 on non CRIT, 1076 on CRIT in an initial unbuffed reference cast. Ningguang casts Q, then player pauses and eats an ATK boosting food while gems are still travelling to target. Ningguang’s gems deal 441 on non CRIT, 1076 on CRIT despite the ATK boost gained before gems connect. Second video shows Ningguang’s gems deal 492 on non CRIT, 1202 on CRIT with food buff.

[Video](https://www.youtube.com/watch?v=ROCJxmSsovM) from Ai\#7362  
First run shows Ningguang cast E at one Lost Prayers stack, and Q at two. Personal gems deal 1545 on non CRIT, 3771 on CRIT. Gems from screen deal 1481 on non CRIT, 3616 on CRIT. Second run can be skipped. Third run shows Ningguang cast E (gem damage from screen difficult to see in this run, so not used as evidence for E screen snapshotting) and then cast Q while at two Lost Prayers stacks. Ningguang gains a third Lost Prayers stack while gems are still travelling to target, but gems still deal 1545 on non CRIT, 3771 on CRIT despite the Lost Prayers stack gained before gems connect.

[Video](https://www.youtube.com/watch?v=pUenM2hrNLI) and [Video](https://www.youtube.com/watch?v=GRDh0k7wF6U) from Bobrokrot\#0111  
Both videos show Ningguang with a 100% CRIT Rate from a fully stacked Royal Grimoire. All gems from both her screen and herself CRIT, despite her losing the 100% CRIT Rate after the first CRIT gem connects due to how the Royal weapons series passive operates.

**Significance:**  
Better rotation and team building for Ningguang surrounding setting up buffs for her E and her Q to snapshot.

### Ningguang Burst Wall Destroy Range

**By:** borderline\#3100  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_958507759026982932_transcript-ning-burst-wall-destroy-range.html)

**Finding:**  
Ningguang's Burst can destroy her Jade Screen from any range, assuming that the Jade Screen exists.

**Evidence:**  
In [this video](https://youtu.be/6w9Juht5doU), Ningguang teleports from her wall at the max construct range, and her wall was destroyed successfully when her Burst was used.

**Significance:**  
Where there's a wall, there's a way \(to destroy it\).

### Ningguang Pays Taxes To The Ground

**By:** Rathalos\#2875  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/ningguang-pays-taxes-to-the-ground)

**Finding:**  
Ningguang's Burst, Starshatter, creates 6 gems on cast. If there is a nearby Jade Screen, the screen is destroyed to create 6 more gems from it. However, the gems that are fired from the Jade Screen suffer heavily from the autotargeting system, causing them to move in patterns that usually result to 1 - 2 gems missing their targets. These gems usually hit the ground instead.

**Evidence:**  
Some sample clips that showcase this phenomenon: [YouTube](https://youtu.be/xcy_R-ZcoRA)  
All of my tests suggest that at least one jade misses for every Burst cast on a flat surface.

**Significance:**  
Sharshatter is the most significant part of Ningguang's kit, so learning more about it can help us understand its properties and effectiveness in combat. For calculation purposes, it is recommended to calculate her Burst damage at 10 gems rather than 12. Perhaps there are ways to manipulate the gem pathing to mitigate the gem-ground tax.

## Constellation Mechanics

### C2: Shock Effect

#### Ningguang C2 and Sacrificial Passive Interaction

**By:** Terrapin\#8603  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_836144484189732905_836630945624752189_transcript-ningguang-e-reset-c2-sacrificial-weapon.html)

**Finding:**  
Ningguang's Elemental Skill with her c2 activated has its effect put into cooldown when her E is used and the Sacrificial passive is procced, if the conditions were met to also proc her c2 effect \( Jade Shield present and broken by casting E \)

**Evidence:**  
[\[Video\]](https://www.youtube.com/watch?v=xyRlbb1E4Ew)

In the first example in the video, Ningguang's Elemental Skill is cast on an enemy, which procs the Sacrificial passive, resetting the cooldown. Then, it is cast again which destroys the original Jade Shield and procs her c2 effect resetting the cooldown.

In the second example, Ningguang's Elemental Skill is cast without any proc. Then, it is cast again \( with the previous Jade Shield present - destroying it \) proccing the Sacrificial passive, resetting the cooldown. Another cast of the Elemental Skill \( destroying the Jade Shield \) shows that the c2 effect has been put into cooldown, as it does not activate.

In the third example, Ningguang's Elemental Skill is cast without any proc. Then, it is cast again \( with the previous Jade Shield present - destroying it \) proccing the c2 effect and resetting the cooldown. It is cast a third time, which now procs the Sacrificial passive resetting the cooldown again.

**Significance:**  
General knowledge on how these mechanics work, in reference to current or future abilities.