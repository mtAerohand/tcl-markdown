# Hu Tao

**Main Page:**

[Component removed]

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1KR_FMtupIbLEhWRGww2N2UKEJG3hy5mWJIez8S6EZ2w/edit?usp=sharing) - Kolibri\#7675
* Burst frame data [Google Sheets](https://docs.google.com/spreadsheets/d/1zCwdd6_KYFqMD4OQ_llGLdDshoZTu_1pmAMysxGDQvs/edit?usp=sharing) - Kolibri\#7675

## Skill Mechanics

### Blood Blossom \(BB\) Duration on Charged Attack Reapplication

**By:** itskhoi\#0013  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_839858127825403904_848324677281251348_transcript-hutao-blood-blossom-duration-on-charge-atk-reapplication.html)

**Findings:**

1. Hu Tao does reset the BB duration with her CA. Due to this, hitlag also "extend" the duration of BB quite significantly
2. Her CA, however, does not reset the BB tick timer
3. Her BB does not snapshot and can CRIT

**Evidence:**  
[Video](https://youtu.be/yrNv3Ovxes4)  
Time stamps in the video:  
[Image.](https://i.imgur.com/c7DzOY8.jpg) At 00;03;06: I first applied BB  
[Image.](https://i.imgur.com/A02CDlE.jpg) At 00;06;13: I reapplied BB for the 1st time  
[Image.](https://i.imgur.com/4oywcDb.jpg) At 00;07;17: BB tick for the 1st time. It was non-CRIT. \(Also, its DMG wasn't 1846, it was 880 that popped right under the 1846\)  
[Image.](https://i.imgur.com/R4udWmE.jpg) At 00;07;24: I reapplied BB for the 2nd time  
[Image.](https://i.imgur.com/KBWABMa.jpg) At 00;09;06, I reapplied BB for the 3rd time  
[Image.](https://i.imgur.com/YEWeDRO.jpg) At 00;10;25: I reapplied BB for the 4th time  
[Image.](https://i.imgur.com/olENR8F.jpg) At 00;12;01: BB tick for the 2nd time. It was a CRIT  
[Image.](https://i.imgur.com/UNW3by4.jpg) At 00;15;28: BB tick for the 3rd time. The DMG was reduced because Hutao was no longer in Paramita Papilio \(PP\), also non-CRIT  
[Image.](https://i.imgur.com/njU9MXZ.jpg) At 00;19;29: BB tick for the 4th. Same DMG as above, without PP and non-CRIT  
[Image.](https://i.imgur.com/1k15rzd.jpg) At 00;20;04: BB ended. Approximately 9s after i reapplied it at 00;10;25

**Significance:**  
Commissioned by @gimmeabreak.  
Also, if you reset BB right before your PP duration end, you can have a maximum of 4 BB tick for 1 PP activation.

## Longer PP with one simple trick

**By:** Aluminum\#5462 & Isu\#6867  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_870511694156267581_871411510004559902_transcript-longer-pp-with-one-simple-trick.html)

**Finding:**  
If you do not dash or jump cancel Hu Tao's charged attack, the Paramita Papilio state will not end during a queued Burst.

**Evidence:**  
[Video 1](https://youtu.be/q-B5W7Tw4VA) [Video 2](https://www.youtube.com/watch?v=AQdeKmZ2vuY)

**Significance:**  
When ending Hu Tao combos with a Burst, it may be advisable to not cancel the final attack.

### Plunging Attacks in PP don't Generate Particles

**By:** Ieah.\#2212  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_967849977265139732_transcript-plunge-attacks-in-pp-dont-generate-particles.html)

**Finding:**  
When Hu Tao is in her Paramita Papillo state, Plunging Attacks will not generate Particles. While the TCL previously stated that "Elemental Particles are generated by Pyro-infused attacks during Paramita Papilio", this applies to Normal and Charged Attacks, but not Plunging Attacks.

**Evidence:**  
In [this video](https://imgur.com/a/yCu3mub), I used GMC rock to elevate myself, used Hu Tao's Skill, and plunged, no Particles were generated. Normal Attack did generate Particles, this was done to check whether my game was working properly \(Note, the Energy gained near the end of the clip was an HP Particle from the boss\).

**Significance:**  
If doing meme plunge comps with Hu Tao, less Energy will be gained and fewer Bursts will be expected.

### Hu Tao's Skill Activation 0 DMG Hit Is Not Skill DMG

**By:** Casdela\#5121  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/hu-taos-skill-activation-0-dmg-hit-is-not-skill-dmg)

**Finding:**  
Hu Tao's Elemental Skill activation is a 0 DMG hit that isn't counted as Skill DMG, therefore it cannot proc effects that require Skill DMG hit like 4pc Tenacity of the Millelith and 4pc Deepwood Memories set effects.  

**Evidence:**  
- Procs PJWS: [YouTube](https://youtu.be/hxcLW3Fpe7A)  
- Doesn't proc TotM: [YouTube](https://youtu.be/NPnGQ6WxueA)  
- Doesn't proc Deepwood: [YouTube](https://youtu.be/JT_n0KtBHqE)  

**Significance:**  
Don't ever trust ~~Hyv's wording~~ NZ.  

## Synergies/Interactions

### Hu Tao Vape Melt Consistency

**By:** jamie\#9248  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_835296118795534388_846695458117124096_transcript-hu-tao-vape-melt-consistency.html)

**Finding:** Tested out the Freeze underlying aura and how it pertains to how hu tao + dragon's bane. Ran the standard Freeze team hu tao/xingqiu/diona/kaeya and tested different combos \(n1c, n1cd, n1cj, n2cj\), in order to see if there's a difference which would keep a Hydro aura under the enemy as much as possible in order to proc dragon's bane on Melt as much as possible. Both n1cd and n1cj were found to produce more than 2x the amount of procs.

Whilst testing I also attempted to confirm vape% and Melt% with the team as there seemed to be no exact answer in the community and if different combos \(n1c, n1cd, n1cj,n2cj\), would also produce different %s. General reaction uptime was confirmed to be around 80%, but Melt% were much higher than the 1/3 expected, the 3 main combos were found to be around 40-50% melt and 33% vape, n1c,n1cd,n1cj. However, n2cj had an additional Pyro attack and therefore suffers at 25% melt and 57% vape uptime.

Notes about N2CJ

* sometimes players are forced to run this combo in longer fights to conserve stamina appropriately
* tests show this has much different results than the other combos, as there is an extra Pyro hit
* Charged Attack Melt% plummets down \(25%\), vape% goes up \(57% approx, could be summerised as either 1/2 or 1/3\), no reaction% is pretty much the same as the others at 20%
* overall despite strong talent% multipliers \(m/v\), it actually looks pretty scuffed for Freeze Melt

**Evidence:** google sheet with runs, 10+ runs of each combo, and video links of the recordings in the sheet too [Google sheets](https://docs.google.com/spreadsheets/d/1W3hYC1tQTwslTZ4YA-1EIHkanCjAve4FqaE1Zuprf-w/edit?usp=sharing)

TLDR

|                     | N1CD | N1CJ | N1C | N2CJ |
| :------------------ | :--- | :--- | :-- | :--- |
| **Vape**            | 33%  | 29%  | 36% | 57%  |
| **Melt**            | 45%  | 51%  | 42% | 25%  |
| **No Reaction**     | 22%  | 20%  | 21% | 17%  |
| **DB proc on Melt** | 37%  | 33%  | 14% | 19%  |

N1 in all combos didn't react at a consistent rate of 60-66% \(the N1 in N2CJ actually got lower at 56%, but that could be down to sample size variance\) melt% and vape% were inconsistent but Melt% was generally higher at 20-30%, vape% under that on Melt DB proc% inconsistent and rare, but clearly possible.

N2 in N2CJ results similar Melt% as N1 with around 30%, but vape% approximately halves compared to N1, with its share of the % going to more no reactions, which are around 66%\)

**Significance:** Dragon's bane \(potentially confirmed?\) to have much more power than initially thought. Not everyone has a staff of homa, and many thought it would only work in vape teams. Potentially her best 4-Star weapon, would be interesting if someone could compare dps vs deathmatch in Melt comps. Also interesting that this Melt team is also 3x 4-Star supports, and kaeya is f2p with both diona and xingqiu available free from events \(as of 1.5\). If this is all accepted by an editor then these findings would be good to promote to f2p/low spenders.

Also Melt comps might have an even higher ceiling than expected, as afaik Melt% uptime isn't expected to be around 50%.

### Mona Q bubble pops with Hu tao E

**By:** Tryhardosaurus\#0007  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_841629546008018955_846705904598777886_transcript-mona-q-bubble-pops-with-hutao-e-cast.html)

**Finding:** Mona Q can be popped by Hutao E cast animation even if this doesn’t deal any damage

**Evidence:** See vid below, Hutao E have a knockback upon cast this might be the reason for the bubble pop. [YouTube](https://youtu.be/tbSi0AzP0ew)

**Significance:** if you're using a Vape comp with Mona + Hutao, you can squeeze more Omen debuff duration if you can try to not pop the Omen with Hutao E cast assuming you'll use Q after E since Q duration takes 130 frames = 2.1 sec = ~40%-50% Omen duratio.

This also might disapprove Mona Q description that says when an opponent affected by Illusory Bubble sustains DMG.

### Hu Tao and Xiangling Vape

**By:** Ayzel#7399 & friends  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_845723930978418758_858187557295620126_transcript-hu-tao-xiangling-vape.html)

**Finding:**  
With both Hu Tao and Xiangling in the same team utilizing Xingqiu to reverse Vaporize their attacks, Xiangling will trigger reverse Vaporize on 60% of her pyronado hits, while Hu Tao will trigger reverse Vaporize on 23.5% of her N1 attacks, 49% of her charged attacks, and 59% of her Blood Blossom Hits.

**Evidence:**  
[Google Sheets](https://docs.google.com/spreadsheets/d/1VFR322mzCJSZssFdwu_2QxtgRT0ImcAFcOavEy7aIr4/edit?usp=sharing) (By Isu)  
[Google Sheets](https://docs.google.com/spreadsheets/d/1XvIuPWXsp5f_mJa8lbteBCq6-d-btYxkLBxGMS7YYTE/edit?usp=sharing) (By yuna)

**Significance:**  
Can be used to calculate Hu Tao/Xiangling dual Pyro teams and their efficacy compared to other teams.