# Traveler (Anemo)

**Main Page:**

[Component removed]

## Basic Mechanics

* Aether frame data \(common\) - [Google Sheets](https://docs.google.com/spreadsheets/d/186FpS4ckDENVY4U60xxgevJZj_vdyYWZroIa7P_yDr4/edit?usp=sharing) - Kolibri\#7675
* Aether frame data \(Anemo\) - [Google Sheets](https://docs.google.com/spreadsheets/d/1y_KoAchtrWwPDradqLvkKuPbLUonsP9G4aFuuxtxAgg/edit?usp=sharing) - Kolibri\#7675
* Lumine frame data \(common\) - [Google Sheets](https://docs.google.com/spreadsheets/d/1S7cJszsMoQF6ShCvA7hMjiXMuOCoDRwgW1rseP0uC8k/edit?usp=sharing) - Kolibri\#7675
* Lumine frame data \(Anemo\) - [Google Sheets](https://docs.google.com/spreadsheets/d/1QCtYnC_qdrCYwN5qDJLYYGuvx81z9fTGNzPdZ8H4nrU/edit?usp=sharing) - Kolibri\#7675

### Mc Base ATK Buff

**By:** Clear_Storm\#9388, Khezu\#4363  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/mc-base-atk-buff)

**Finding:**  
After a certain quest chain in Chapter III: Act I of the Sumeru Archon Quest, the Traveler obtains a Base ATK buff of exactly 3 Base ATK. This buff persists on every Element and is permanent.  
  
**Evidence:**  
[YouTube](https://youtu.be/AQNmuPRsMjY) \[Archon Quest Spoilers\]  
[YouTube](https://youtu.be/vLAV96rPQ4M)  
  
**Significance:**  
For updated stats and calculation purposes.  

## Skill Mechanics

### AMC E Additional Elemental Damage

**By:** Neptunya\#8291, phaZ\#6461, and Bobrokrot\#0111  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_883277582366277652_906334012480561162_transcript-amc-e-additional-elemental-dmg.html)

**Finding:**  
Anemo MC's Skill is missing talent values for the additional Elemental damage that happens when Elemental absorption occurs.  
The additional Elemental damage dealt is 0.25x that of the Anemo damage dealt.

**Evidence:**  
[Google Doc showing the additional Elemental damage dealt](https://docs.google.com/spreadsheets/d/1uTBPUMtR4bQ_T7QeQc6_JRXQvcYxz1muZXiiSEF-Ze8/edit#gid=0)

**Significance:**  
There will always be those who dare to brave Anemo MC's blender of numbers.

### AMC Hold E Ticks

**By:** pai#3602  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_932713629835481118_936064084728762378_transcript-amc-hold-e-ticks.html)

**Finding:**  
The Additional Elemental DMG on AMC Hold E ticks between 5 and 6 times, while the Skill itself can tick up to 7 times.

**Evidence:**  
[YouTube](https://youtu.be/QC0ZXCX2CeA) - There are 2 attempts in the video, the first one shows 5 ticks and the second one shows 6, but it's never 7.

**Significance:**  
The Additional Elemental DMG seems to randomly start with the second Initial Cutting DMG or with the first Max Cutting DMG.

### AMC Snapshot

**By:** pai#3602  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_934098477913374820_936199910582272070_transcript-amc-snapshot-evidence.html)

**Finding:**  
AMC Hold E is dynamic and Q snapshots, for both the Anemo and the Additional Elemental DMG.

**Evidence:**

* Hold E: [YouTube](https://youtu.be/XbZFc77QXQE)  
  Unbuffed Max Cutting DMG (0 stacks, no CRIT): 171 Anemo, 42 Electro  
  Buffed Max Cutting DMG (2 stacks, no CRIT): 199 Anemo, 49 Electro

* Q: [YouTube](https://youtu.be/lnia3ynnn0Y)  
  Tornado DMG (no C6): 824 Anemo, 253 Electro  
  Tornado DMG (C6 RES Shred): 962 Anemo, 295 Electro

### \[Deprecated\] AMC E Frames Update

**By:** pai#3602  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_932722588076081232_938503721296482354_transcript-amc-e-frames-update.html)

**Finding:**  
AMC E frame counts were previously incorrect.  
Currently in the TCL:  
Press: 27  
Hold: 27~61

Updated:  
Press: 60  
Hold: 60~145

**Evidence:**  
[Press](https://youtu.be/yGNDt7mTQA8)  
[Hold](https://youtu.be/OzwVqS84Rd8)

**Significance:** More accurate frame counts with evidence.

### Frozen AMC With E Active

**By:** Hoshbomb\#6327  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_955984471470010428_transcript-frozen-amc-with-e-active.html)

**Finding:**  
When AMC is Frozen right before their E starts doing damage, Palm Vortex will still activate. It has different properties from the typical Palm Vortex, differences are as follow:

* There is no Initial Storm Damage after 2 hits, nor is there Max Storm Damage to end the sequence of Anemo DMG.
* It won't generate Anemo Particles for party members to collect.
* The duration of Palm Vortex is now directly tied to how long AMC is Frozen for.
* AMC's Elemental Absorption Priority is Cryo \> Pyro \> Hydro \> Electro, which means AMC's Palm Vortex will always self-absorb Cryo.

It will deal Anemo DMG, and Anemo application still occurs with a normal ICD of 3 hits/2.5 seconds.

**Evidence:**  
[YouTube video](https://youtu.be/KFxZpb2PEEQ)

**Significance:**  
Fluff.

### Cause of the Extra Absorption Hit On AMC's Hold Skill

**By:** @grankrathalos, @jamberry, @solasel  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/cause-of-the-extra-absorption-hit-on-amcs-hold-skill)

**Finding:**

As documented in [this ticket](#amc-hold-e-ticks), AMC's hold E skill's absorbed elemental damage is inconsistent, sometimes missing a hit for no apparent reason.

Investigating further, this is due to a randomly timed aura check. If it happens before the second initial cutting hit, the player gets 6 hits (one initial cutting, four max cutting, one max storm) of absorbed elemental damage. If it happens after or on the same frame as the second initial cutting hit, the player will only get 5 hits of absorbed elemental damage.

This aura check's timing depends on the game's framerate, with the chance of getting a 6-hit starting at \~80% at 60fps going down to \~20% at 15fps. It does not seem to depend on any other common factors such as latency.

At very low fps (\~15fps) it is even possible to have the aura check happen so late that it misses the first max cutting hit, resulting in only 4 hits of absorbed elemental damage.

**Evidence:**

1: [25 Trials on each sibling on 15, 30, 45, and 60 fps](https://docs.google.com/spreadsheets/d/1QBE2949PT7pUo4UCoUHLk03zKbRDNTjLUQhDdGFv_a0/edit?usp=sharing)

- Check the youtube description for timestamps on 4-hits occurring.

2: [69 ping](https://docs.google.com/spreadsheets/d/15EUChwWpDYP9Dk-7wjf3cCONoWlIlGj-7eVrWJNrHA4/edit?usp=sharing) vs [675 ping](https://docs.google.com/spreadsheets/d/1dt_IdD2g-Bc9LfUSz-L_xWlXYPPIADrF1I4Rmmj6b7M/edit?usp=sharing), showing that latency does not have a significant effect.

These findings have their limitations - more trials are needed to find the exact distribution of aura check frames by fps. It is also possible there are other confounding factors - in earlier trials, tests indicated a rate of \~95% 6-hits at 60fps, but later trials showed \~80%. This is most likely due to simply having too small of a sample to get close to the true value, or possibly a difference in the environment (game settings, external programs, etc.)

Similarly, it is unclear if the difference in absorption rates between Aether and Lumine was due to too small of a sample, or potentially something different about the siblings' mechanics. The same goes for Aether's unusual 45fps rate.

**Significance:**

This finding is significant for a few practical reasons and a few larger-scale tc reasons.

Practically speaking, this impacts how AMC handles, especially on lower-end setups. For a specific example, holding AMC's E between \~710ms-810ms ideally results in:
- 2 initial cutting anemo hits
- 1 initial cutting absorption hit
- 1 initial storm anemo damage
- 1 initial storm absorption damage
- 2 swirls
- 2 secondary reactions from the absorption damage
- a 5 second cooldown

However, if one's fps is sufficiently low, this outcome can become unlikely, instead often not absorbing at all. This will cause the player to either lose damage or be forced to use a longer hold E to get the same results, which most significantly means higher field time and a longer cooldown.

This also impacts some other interactions, such as how well AMC triggers Shenhe's quills, and the elemental damage distribution on Light of Foliar Incision's passive.

More broadly speaking, this gives us a bit of insight into how the game is coded. For instance, given the lack of variability in fps in the latency-related trials, it is reasonable to assume that the variation in aura check timing (at the same fps level) is *an intentional design choice by Hoyoverse*, which is very odd, especially given that the data seems to suggest a normal distribution, not a uniform distribution, as one might expect.

Furthermore, this exposes a very pathological way the game interacts with varying FPS. Although this isn't 100% confirmed, it seems like the game decides when to do the aura check by choosing a number of frames to delay after the first initial cutting hit. Thus, with lower fps, the game waits "longer" in ingame time before it actually does the aura check, missing out on some hits. The reason it is presumed to happen after the first initial cutting hit is that even when the game's framerate limit is removed and tests are done at \~300fps, the aura check never occurs before the first initial cutting hit.

If this concept of aura checks being affected by framerate is universal across the cast, this also might be significant for other characters. Wanderer's A1 passive talent comes to mind in particular, as it is possible that the initial burst of anemo damage may interfere with absorbable auras before the check, especially at lower fps. Again though, this is only assuming a similar FPS-related mechanic is at play, which very well may not be the case, especially given how early into the game's history AMC was coded.

## Burst Mechanics

### Anemo MC's Burst Absorption is 2U

**By:** Kourinn\#6001

**Added:** [Component removed]  
**Last tested:** [Component removed]

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_912926771412869150_919900426554454083_transcript-anemo-traveler-q-2b.html)

**Finding:** Anemo MC's Burst is 1U Anemo, but the absorption is 2U.

**Evidence:**

* With delayed absorption, the last absorption Element application matches expected aura duration for 2U absorption with 1U Anemo:
  * [2U Absorption](https://youtu.be/yh4dH0WbA6A)
* With 1U type decay transfer and immediate absorption, the last absorption Element application matches expected aura duration for 2U absorption:
  * [2U Absorption with 1U Decay](https://youtu.be/2MtlaOVx904)

**Significance:** The increased absorption gauge may be useful for:

* Shield breaking when able to absorb a counter Element.
* Increased Freeze duration otherwise unavailable due to the rarity of 2U Hydro applicators (only Tartaglia and Kokomi as of patch 2.3)

### Anemo MC's Q ability to "pick up" enemies is dependent on level difference

**By:** Tsym\#2586  
**Added:** [Component removed]  
**Last tested:** [Component removed]

**Editor's Note:** This same behavior can be observed for Venti. Venti was tested comprehensively by the theorycrafting community; pending submission.

**Evidence:** [YouTube](https://youtu.be/rBDMuzkVb54)

See the video. In the two clips I didn't change anything other than leveling up the character. I also tried putting more attack on her instead when she was level 71 with no effect.

Note that level 71 is sufficient to pick up the enemies on Spiral Abyss floor 11-1, which are level 88, so the level difference requirement might be ~25 or so, since going from 71 to 75 is enough to pick up the level 98 enemies on Floor 12-1.

**Significance:** Anemo MC needs to be of a sufficiently high level relative to the enemy in order to be at all useful in combat at high enough levels.

### AMC Burst AoE

**By:** pai#3602  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_932713520880037960_936073712623583232_transcript-amc-burst-AoE.html)

**Finding:**  
The Additional Elemental DMG has less AoE than the Tornado DMG.

**Evidence:**  
[YouTube](https://youtu.be/JZfWZiAeMsc) - In the video there were all 9 instances of Tornado DMG but only 1 instance of Additional Elemental DMG because the Ruin Guard wasn't right next to the pillar and the Tornado was stuck on the pillar.

**Significance:**  
The Additional Elemental DMG basically only happens when the Tornado goes right through an enemy.

## Ascension Mechanics

### A1: Slitting Wind

#### Anemo Traveler triggers Mistsplitter NA Stack

**By:** amaryillis#4774  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_881703224262938685_884467343575633980_transcript-anemo-traveler-mistsplitter-stacks.html)

**Finding:**  
Anemo Traveler can trigger Mistsplitter NA Stack with Slitting Wind.

**Evidence:**  
[YouTube](https://youtu.be/6LpsILZWm9E): Mistsplitter Reforged is seen with zero stacks (no glow) at the beginning, with full Burst. After Anemo windblade hits, a glow is seen, showing that a stack of Mistsplitter has been produced.

**Significance:**  
AMC can reliably trigger 2 stacks of Mistsplitter Reforged, thereby making them able to utilize it for an Anemo damage boost in cases of teams where they are a dps with their E.

#### Anemo Traveler A1 counts as Normal Attack

**By:** Blank#4561  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_864157638828490762_864440105296592906_transcript-traveler-ascension-skills.html) (NOTE: This ticket was submitted pre-2.1, before Geo Traveler's A4 was fixed)

**Finding:**  
Anemo Traveler A1 counts as Normal Attack Damage.

**Evidence:**  
Anemo Traveler's A1 Passive Slitting Wind is increased by Normal Attack DMG bonus: https://youtu.be/e6hCib9ZM2Q

**Significance:**  
Although a minor damage source, Anemo Traveler's A1 Passive damage is increased by DMG bonuses towards Normal Attacks.

#### MC Elemental Proc Difference

**By:** Rathalos\#2875  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_955996204477612072_transcript-mc-elemental-proc-diff.html)

**Theory:**  
The Elemental proc \(Slitting Wind\) from the last string of the Traveler's basic attack behaves differently between Aether and Lumine. Specifically, Lumine's Elemental proc happens some time after the last frame of her N5 attack string, while Aether's Elemental proc happens before his N5 attack string occurs.

The possible explanations for this is that the Elemental proc occurs during a specific frame that is shared between both twins, and it just so happens to occur after Lumine's N5 but before Aether's N5.

Lumine's entire N5 sequence takes ~148 frames while Aether's N5 sequence takes ~163, so it is definitely a possibility. However, my device doesn't allow me to framecount very well so I'll leave it as a possible explanation.

**Evidence:**

* [Aether](https://imgur.com/uh7Oov6)
* [Lumine](https://imgur.com/FWYE82c)
* [Lumine's N5 Combo](https://imgur.com/7yVrQVW) which shows that the Elemental proc is delayed from the damage number
* [Aether's N5 Combo](https://imgur.com/02215GA) which shows the Elemental number almost the same time as the white number, but on some occasions the Elemental number appears before the white number.
* [Another clip](https://imgur.com/guq8g4f) showcases a hilichurl being killed by the Anemo DMG number before the 5th hit.

**Significance:**  
This means that it is possible for Aether to hit the Elemental proc without/before connecting his fifth attack, while it is possible for Lumine to miss her Elemental proc if she cancels her N5 too fast.

Another possible significance is that this might be a clue to how the Travelers are coded. They might share the same timings for other similar things that manifest at different moments just because of animation difference. As of writing this, no other application comes to mind.

## Constellation Mechanics

### C6: Intertwined Winds

#### C6 Effect Duration

**By:** Orodalf\#9570  
**Added:** [Component removed]  
**Last tested:** [Component removed]

**Finding:** Anemo Traveler C6 lasts 10 seconds.

**Evidence:** [YouTube](https://imgur.com/H7zQc6Y)

Final hit of Traveler Q at 3 seconds, Venti's Q stops doing extra damage at 13 seconds:

**Significance:** I didn't see this written down anywhere else, so.