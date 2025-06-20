# Barbara

**Main Page:**

[Component removed]

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1R_OywCjjSW8PeYPPniBLVnoTZ8uQ2L_GLKYmQvFTHV0/edit?usp=sharing) - phaZZi\#6461 & Kolibri\#7675
* Burst frame data [Google Sheets](https://docs.google.com/spreadsheets/d/1zCwdd6_KYFqMD4OQ_llGLdDshoZTu_1pmAMysxGDQvs/edit?usp=sharing) - Kolibri\#7675

## Skill Mechanics

### Barbara E Animation Cancel

**By:** RoaringMeow\#2437  
**Added:** [Component removed]  
**Last tested:** [Component removed]

**Finding:**

Reducing Barbara E animation for optimizing the "first heal"

**Evidence:**

* Just Switch: [YouTube](https://youtu.be/8d4SAxy2yrM)
* Just Switch and Beyond: [YouTube](https://youtu.be/yBNpbQNPVgg)

**Significance**

A mechanic which is super useful to abuse the switch character cooldowns while using character's E between delays. So far I found only Barbara being able to do it consistently

Steps to Reproduce

* Switch to Barbara
* Press the button to swap to another character and immediately spam E

### Barbara E Cancel Can Proc 4-Piece Set Bonuses

**By:** Poro\#4695  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_936984762726363136_938452706647998495_transcript-barbara-e-cancel-can-procstack-4pc-sets.html)

**Finding:**  
Barbara has a small time window during her initial Elemental Skill cast that allows her to dash and cancel the Elemental Skill, while avoiding the cooldown and triggering 4-Piece set bonuses from artifacts.

**Evidence:**  
[YouTube Video](https://youtu.be/HgPYkUIzl6A)  
4-Piece Shimenawa's Reminiscence:

* Unbuffed: 93 DMG
* Buffed: 140 DMG

4-Piece Heart of Depth:

* Unbuffed: 98 DMG
* Buffed: 109 DMG

**Significance:**  
Potential improvement for Main DPS Barbara as you can now avoid her long Elemental Skill cooldown.

### Funny Barbloom

**By:** Drak\#0343, Kolibri\#7675, daibangden\#8410, Zasshu.\#4509  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/funny-barbloom)

:::note
This was found in v. 3.0 and HoYoverse said that v. 3.1 "Fixes an issue whereby the Dendro Cores created by Bloom reactions can cause the effects of certain characters' Skills to be triggered abnormally", but it still works \(for now\). \[[Official Post](https://www.hoyolab.com/article/9396655)\]  
:::

**Bug:**  
Barbara's water ring triggers on entities.  
  
**Evidence:**  
Barbara Skill ring is spawning ridiculous numbers of blooms due to an interaction around the classification of Dendro Cores as entities and her ring triggering damage on entering her AoE. This causes her ring to pulsate Hydro every time a Dendro Core enters, meaning that enemies nearby continuously are attempted to have Hydro applied to them, and in 3+ enemy scenarios, this causes the 3-hit condition for ICD to be met near instantaneously, applying Hydro again, making more seeds and creating an infinite loop for as long as there is a Dendro aura.  
  
[YouTube](https://youtu.be/i31AYi5apIE)  
[YouTube](https://youtu.be/tAKXkuK_03A)  
  
**Significance:**  
Barbara Skill can lead to extremely high Bloom counts very easily reaching the cap.

### Barbara E Ring Applies Hydro Cleanse To Co-Op Members In Contact Too

**By:** aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\#3860  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/barbara-e-ring-applies-hydro-cleanse-to-co-op-members-in-contact-too)  

**Finding:**  
When Barbara E ring cleanses your own character, it cleanses Co-Op members in contact with it too \(initial cast included\).  

**Evidence:**  
[YouTube](https://youtu.be/S_WsQDhdbX8)  
You can see wet status applied to me \(Barbara\) and Co-Op members that the Barbara E ring is in contact with, with the wet status in Mandarin text appearing above me and those in contact with it.  

**Significance:**  
Found out that Barbara can cleanse Co-Op members too, and make other players wet.  

## Constellation Mechanics

### C6: Dedicating Everything to You

#### C6 Revive Can Be Canceled by Switching

**By:** yolitme0\#0579  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_904016162382311484_904534494319607848_transcript-barbara-c6-revive-can-be-canceled-by-swapping.html)

**Finding:**  
If a character dies at the same time the player switches characters, the death animation for the dead character will not activate, and neither will the revive from Barbara C6.

**Evidence:**  
[YouTube](https://youtu.be/2BZSTCRNuJo)  
The death animation and revive activates for Qiqi, but not for Aloy.

**Significance:**  
Barbara C6 is potentially worse as a safety net against death since it can be canceled by switching, which is common in regular play.