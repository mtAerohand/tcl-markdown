# Movement and Physics

**Main Page:**

[Component removed]

## Dashing

### Infinite Dashing and Catapulting off cliffs (Translation)

**By:** KluEvo\#8507  
**Added:** [Component removed]  
**Last tested:** [Component removed]

**Finding:**  
Double dashing with pauses can allow for infinite running. Dashing off of cliffs can allow for faster fall.

**Evidence:**  
[Google Doc](https://docs.google.com/document/d/1LWCaPASur30ei7OQKC89EujL0TZloXk7sp_Hnxruvjw/view)

**Significance:**  
Faster Travel.

### Cliff Dash Displacement

**By:** Mcpie\#8672  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_831242042801389568_849905930174595072_transcript-dashing-off-a-cliff-speed-comparison.html)

**Methodology/Evidence:**

Test consists of 9 different positions next to a "launchable" cliff, each of them separate by two single 'taps' forward using Diona \(except for the last \#9 which is a single tap due to not enough space\). After marking both the starting and landing position of each character, it is clear that `dash-off` velocity is not linear and could reflect your character's velocity at the moment it loses it's ground.

Comparison from top \(screenshots\) for each position - [YouTube](https://imgur.com/a/Sr311lx)  
Comparison by position - [YouTube](https://imgur.com/a/9kHirR3)  
Comparison by character - [YouTube](https://imgur.com/a/XZu1Qni)  
Raw video \(timestamps in description\) - [YouTube](https://www.youtube.com/watch?v=D2km0PDWnVA)

Results depending on position:

```text
1: Diluc -> Bennett -> Ningguang -> Qiqi -> Sucrose
2: Diluc -> Bennett -> Ningguang -> Sucrose -> Qiqi
3: Diluc -> Bennett -> Ningguang -> Sucrose -> Qiqi
4: Diluc -> Bennett -> Qiqi -> Ningguang -> Sucrose
5: Diluc -> Bennett -> Qiqi -> Ningguang -> Sucrose
6: Diluc -> Bennett -> Qiqi -> Ningguang -> Sucrose
7: Diluc -> Bennett -> Ningguang | Qiqi -> Sucrose
8: Diluc -> Qiqi -> Ningguang -> Bennett -> Sucrose
9: Diluc -> Ningguang -> Sucrose -> Bennett -> Qiqi
```

**Significance:** Might help when deciding in overworld traveling which character would be best to dash off a cliff with depending on your position from the cliff. This explains why, despite visually having similar character heights, teen female models can't initiate dash-jump-plunge on flat surface against vast majority of enemies while teen male models can.

### Consecutive Dash Cooldown Trigger Is 0.8s

**By:** Kourinn\#6001  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/consecutive-dash-cooldown-trigger-is-08s)

**Finding:**  
Consecutive Dash Cooldown Trigger is 0.8000s. This can be extended by hitlag.  

**Evidence:**  
[YouTube](https://youtu.be/dKiHbJZZA2E)  
```  
This shows the interval for which consecutive dashes will trigger the dash cooldown. The footage is 120 fps gameplay converted to 50% speed 60 fps video.  
Consecutive dashes starting at frames 100 and 196, trigger the dash cooldown. Converting to real time, 96 / 120 is 0.8000 seconds.  
Consecutive dashes starting at frames 541 and 638, does NOT trigger the dash cooldown. Converting to real time, 97 / 120 is 0.8083 seconds.  
For further samples not shown here, all consecutive dashes with 94 frame interval or smaller triggered the cooldown. Meanwhile no consecutive dashes with 98 frame interval or larger triggered the cooldown. Intermittent results between 95 and 97 frame interval are caused by input variance within starting and ending frametimes.  
```  
[YouTube](https://youtu.be/tmIyJPkDFKk)  
```  
This shows the interval for which consecutive dashes will trigger the dash cooldown. The footage is 120 fps gameplay converted to 50% speed 60 fps video.  
The 0.8s consecutive dash cooldown trigger is extended by hitlag.  
Consecutive dashes starting at frames 46 and 158 still trigger the dash cooldown due to 18 frames of hitlag. Converting to real time, (112 - 18) / 120 is 0.7833 seconds.  
Consecutive dashes starting at frames 464 and 578 do not trigger the dash cooldown. Converting to real time, (114- 18) / 120 is 0.8000 seconds.  
```  

**Significance:**  
Good to know for dash canceling combos (i.e. C1 Hu Tao) and open world traversal.

## Climbing

### Climbing without Climbing

**By:** Nitley\#3485  
**Added:** [Component removed]  
**Last tested:** [Component removed]

**Finding:**  
After familiarizing myself with the technique of b-hopping in the first week of Genshin's official release for the purpose of re-roll AR7 speedruns, this would quickly become my exclusive means of travel. This led me to discover an alternative faster method of scaling near-vertical walls \(without climbing or consuming stamina at all\).

**Evidence:**

* [Introduction to b-hopping by Arch- er](https://youtu.be/3bY_vUgHY_g)
* [Climbing without Climbing](https://youtu.be/n56JICDn1Eg)

**Significance:** Can make virtually any travel quicker, whether you're mob farming around your world, crystal farming, or getting character ascension mats etc etc..


## Swimming

### Swimming Methods

**By:** Fuzzy#5432  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_856824799057018880_857668248568332319_transcript-swimming-methods.html)

**Finding:**  
Tapping shift while swimming has a stamina cost that is only a little higher than not holding shift, but the swimming speed is almost as fast as holding shift. (Project inspired by u/lightmgl on Reddit)

**Evidence:**  
[Video](https://www.youtube.com/watch?v=wOdFDxYUcJA&ab_channel=Fuzzy)

**Significance:**  
Get around Teyvat faster! Though not holding shift while swimming is the most stamina efficient and holding shift while swimming is the fastest, tapping shift at even intervals will offer the best of both methods: a relatively fast, stamina-efficient way of swimming

### Optimal Swimming

**By:** Goden\#2155  
**Added:** [Component removed]
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/optimal-swimming)

**Bug:**  
Turning while swimming drains extra Stamina, so swimming in straight lines should be done whenever possible.  
  
**Evidence:**  
Found that if you mash A and D to rapidly move side to side it drains your stamina very quickly, so consequently turning must use up extra stamina in comparison to moving in a straight line when swimming \(the drain is actually extremely fast and could be even faster if you macro'd the little wiggle I did in the water, real wild\).  
* Stamina drain while swimming in a straight line [YouTube](https://youtu.be/Nf_TkhpBSR8)  
* Stamina drain while rapidly moving side to side [YouTube](https://youtu.be/rqcAJtCP0x0)  
  
**Significance:**  
Swim in straight lines for maximum distance \(or speedrun drowning if that's your goal\).  

### Underwater Travel Speed  

**By:** @caramielle., @staryy_  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/underwater-travel-speed)

**Findings:**  
1. All character models swim at the same speed underwater.  
2. Repeatedly tapping swim leads to faster travel speed than holding swim.  
3. Using the Waverider is still the fastest way to travel across water.  

**Evidence:**  
*all tests were done by seeing how many frames it took to swim a set distance, count starts on the frame swim button registers input*  

**Body Types**  
distance is from startpoint -> when the bridge touches the edge of the screen  
- Tall Female (71f-949f, in total 878f): [YouTube](https://youtu.be/_KwjLF60EF4?si=f7LIE1qf-oMq-lbb)  
- Tall Male (48f-925f, in total 877f): [YouTube](https://youtu.be/PQ09G0UrZLM?si=2sN7usIP4M6AjNk9)  
- Short Female (24f-901f, in total 877f): [YouTube](https://youtu.be/uX0Q7JXbUTU?si=m8awW2sO_3UC6OJz)  
- Short Male (41f-919f, in total 878f): [YouTube](https://youtu.be/IhwjUK35_4U?si=9KkZE8rNWFKR6iVE)  
- Child (34f-908f, in total 874f): [YouTube](https://youtu.be/u5XG_NJL_VY?si=SgocM5iNqplidRP0)  
   
**Tap vs. Hold Swim**  
distance is startpoint -> 484m distance from questmarker  
- Hold Swim (21f-1294f, total of 1273f): [YouTube](https://youtu.be/n6CUcNGVpbw?feature=shared)  
- Tap Swim (69f-1236f, total of 1167f): [YouTube](https://youtu.be/KeHWyFvu6qs?feature=shared)  
  
**Waverider**  
distance is 1115m -> 1228m from questmarker  
- Character (85f-955f, total of 870f): [YouTube](https://youtu.be/mfx1I3gN80U?feature=shared)  
- Waverider (151f-785f, total of 634f): [YouTube](https://youtu.be/t-wbqPyh0ic?feature=shared)  
  
**Significance:**  
gotta ~~go~~ swim fast 

### Fontanian Dolphin Jump

**By:** @cqlqrs  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/fontanian-dolphin-jump)

**Finding:**  
Fontanians (and the Traveler of any Element) can dolphin jump out of the waters of Fontaine while characters from other regions simply surface when they reach the top of the water.  
  
**Evidence:**  
Fontainians + Traveler (Hydro and Dendro) can dolphin jump  
[YouTube](https://youtu.be/KjH0B3u4c7o)  
  
Non-Fontainians cannot dolphin jump  
[YouTube](https://youtu.be/t8Rjzsr1APs)  
  
**Significance:**  
Having a Fontainian in the player's team can significantly speed up swimming in Fontaine by abusing the Dolphin Jump Mechanic.

## Movement Speed

### Movement Techniques and Player Model Comparisons

**By:** Nitley\#3485 and Kourinn\#6001  
**Added:** [Component removed]  
**Last tested:** [Component removed]

**Theory:**  
What is the fastest movement technique for both short distances and long distances? Do movement speed buffs produce non-linear scaling for different character model sizes?

* Short Distance = The distance you're able to sprint with 1 full bar of stamina \(assuming 240 max\).
* Long Distance = The distance traveled by sprinting with a full bar of stamina and continued travel until complete stamina regen.

**Evidence:**  
Time stamps available in spreadsheet + video descriptions

* [Google spreadsheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vRmNrVjMuBzcJGQeKzMhUKglJjJocONdBhOeL83McT9Kfrn8_XlN6DUqPmfI1RmJFa7pluM--IqT-Wd/pubhtml) of recorded times
* [Short Distance](https://youtu.be/oJH8cS1SnRY)
* [Long Distance](https://youtu.be/ySDRLkYP8sk)

**Significance:**
The fastest movement technique for a short distance is to chain dashes together with equal spacing between them with an adult male as they have the biggest strides. This will ensure your dash has more uptime than simply dash spamming. For long-distance you will do the same, dash chaining with maximum dash uptime on an adult male then switching to a teen male for the last dash of your stamina charge and chaining b-hops from thereon.

Demonstration: [YouTube](https://youtu.be/H950uTOSTQs)

A 10% movement speed buff does not cause b-hopping with other model types to be faster than a teen male with the same buff. However, I am still yet to test 20%/20% effects although not expected to change either.

**The Math:**  
Comes to the same conclusions as the empirical tests above.

```python
Stamina Cost Reduction

Anemo Resonance : 15%
Kaeya Passive   : 20%
Food            : 25%
                   =
Total           : 50%

===

Base dash stamina cost : 15
Effective stamina cost : 7.5 (after Stamina Cost Reduction)

Stamina capacity           : 240
Effective stamina capacity : 225 (cannot dash at/below 15 stamina regardless of stamina cost reductions)

Stamina regen delay : 1 sec
Stamina regen rate  : 30/sec


Full stamina dash count: 225/7.5 = 30
Full stamina regen duration: 1s + (225/30)s = 8.5s
not-sprinting test = sprinting * 1.3 = 15:45 (needs more testing to verify)

===

velocity = distance / time

v(b-hop)      = 1000 d / 9:47 f = 1.7035775127768313 d/f
v(dash-chain) = 1000 d / 9:12 f = 1.8115942028985508 d/f
v(not-sprint) = 1000 d / 15:45 f = 1.0582010582010581 d/f

===

distance = velocity * time

30s * v(dash-chain) + 8.5s * v(not-sprint) = 63.34253508166552 d
38.5s * v(b-hop)                           = 65.58773424190801 d
```

B-Hopping should be 3.5% faster than dash-chaining, waiting for full stamina, and repeating.


### Movement Speed affects Dashing Horizontal Velocity

**By:** Mcpie\#8672  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_846504230898237480_851744572958310401_transcript-movement-speed-affects-dashing-horizontal-velocity.html)

**Finding:**  
Movement speed affects dashing-off a cliff horizontal velocity

**Evidence:**  
5 tests, each following these steps:

1. Teleport to Qingyun peak with Kaeya
2. Once there, teleport to the waypoint again
3. Click "dash" and wait for Kaeya to land

Tested movements speeds: 1. [0%](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_846504230898237480_846505725978738738_2021-05-24_23-18-01-00.02.983-00.20.233-audio.webm)  
2. [10%](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_846504230898237480_846505796468604928_2021-05-24_23-18-01-00.51.433-01.06.633-audio.webm) - Anemo Resonance  
3. [10%](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_846504230898237480_846505886448353310_2021-05-24_23-18-01-02.12.733-02.29.000-audio.webm) - Rosaria passive  
4. [10% + 10% = 20%](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_846504230898237480_846505946787479573_2021-05-24_23-18-01-01.32.233-01.49.467-audio.webm) - Anemo Resonance + Rosaria passive  
5. [10% + 10% + 24% = 44%](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_846504230898237480_846506066237718528_2021-05-24_23-18-01-03.31.250-04.05.300-audio.webm) - Anemo Resonance + Rosaria passive + R5 Skyrider Sword

Raw video evidence \(no timestamps\): [YouTube](https://www.youtube.com/watch?v=C69T4AwkJGE)

### Movement Speed Stacks Additively

**By:** Mcpie#8672  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_902943515452010516_904567719486169099_transcript-mvmnt-speed-stacks-additively.html)

**Finding:**  
Movement speed stacks additively.

**Evidence:**  
Code contains coordinate points at the bridge in Stormterror's Lair. Videos are listed below.

Methodology:

1. Teleport to a portable waypoint.
2. Sayu hold E once you get the speed boosts.
3. Note the coordinates at the end.
4. Calculate the difference between start and finish.

Code to get the results

```js
f = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.z - b.z) ** 2);

sp = { x: 2556.41943359375, y: 226.09994506835938, z: 99.05547332763672 };
// no bonus end
ap = { x: 2447.570068359375, y: 226.08108520507812, z: 59.62977981567383 };
// Anemo end
bp = { x: 2438.5205078125, y: 226.08163452148438, z: 56.352020263671875 };
// c6 amber
cp = { x: 2433.970947265625, y: 226.0803680419922, z: 54.70412063598633 };
// Anemo + c2 jean
dp = { x: 2422.114013671875, y: 226.08883666992188, z: 50.40952682495117 };
// Anemo + rosaria + c2 jean
ep = { x: 2411.67822265625, y: 226.0984649658203, z: 46.56678771972656 };
// Anemo + rosaria + c6 amber
fp = { x: 2413.02001953125, y: 226.0989227294922, z: 47.11567687988281 };
// Anemo + rosaria + c2 jean + c6 amber - ~1s downtime due to c6 amber
gp = { x: 2407.254638671875, y: 226.0986328125, z: 45.02743911743164 };
// Anemo + rosaria
hp = { x: 2427.69140625, y: 226.08416748046875, z: 52.35829162597656 };

qd = f(sp, ap);
wd = f(sp, bp);
ed = f(sp, cp);
rd = f(sp, dp);
td = f(sp, ep);
yd = f(sp, fp);
ud = f(sp, gp);
id = f(sp, HP);

console.log(
  wd / qd,
  `Expected 1.10 - error: ${(1.1 - wd / qd).toFixed(4)} - Anemo resonance`
);
console.log(
  ed / qd,
  `Expected 1.15 - error: ${(1.15 - ed / qd).toFixed(4)} - C6 Amber`
);
console.log(
  id / qd,
  `Expected 1.20 - error: ${(1.2 - id / qd).toFixed(
    4
  )} - Anemo resonance + Rosaria`
);
console.log(
  rd / qd,
  `Expected 1.25 - error: ${(1.25 - rd / qd).toFixed(
    4
  )} - Anemo resonance + C2 Jean`
);
console.log(
  td / qd,
  `Expected 1.35 - error: ${(1.35 - td / qd).toFixed(
    4
  )} - Anemo resonance + C2 Jean + Rosaria`
);
console.log(
  yd / qd,
  `Expected 1.35 - error: ${(1.35 - yd / qd).toFixed(
    4
  )} - Anemo resonance + C6 Amber + Rosaria`
);
console.log(
  ud / qd,
  `Expected 1.50 - error: ${(1.5 - ud / qd).toFixed(
    4
  )} - Anemo resonance + C2 Jean + Rosaria + C6 Amber`
);
```

Output:

```
1.0831383008038595 Expected 1.10 - error: 0.0169 - Anemo resonance
1.124935238192009  Expected 1.15 - error: 0.0251 - C6 Amber
1.1828354702848394 Expected 1.20 - error: 0.0172 - Anemo resonance + Rosaria
1.2338648745201064 Expected 1.25 - error: 0.0161 - Anemo resonance + C2 Jean
1.3299235580294233 Expected 1.35 - error: 0.0201 - Anemo resonance + C2 Jean + Rosaria
1.3174113764030009 Expected 1.35 - error: 0.0326 - Anemo resonance + C6 Amber + Rosaria
1.3703779558697553 Expected 1.50 - error: 0.1296 - Anemo resonance + C2 Jean + Rosaria + C6 Amber
```

Videos:

1. Sayu roll without bonuses: [Imgur](https://i.imgur.com/t77NGtg.mp4)
2. Sayu roll with Anemo resonance: [Imgur](https://i.imgur.com/JUCriOO.mp4)
3. Sayu roll with C6 Amber: [Imgur](https://i.imgur.com/YkvmsR5.mp4)
4. Sayu roll with Anemo resonance + Rosaria: [Imgur](https://i.imgur.com/W3QARkF.mp4)
5. Sayu roll with Anemo Resonance + Rosaria + C6 Amber: [Imgur](https://i.imgur.com/xV4ZfwC.mp4)
6. Sayu roll with Anemo Resonance + Rosaria + C6 Amber + C2 Jean: [Imgur](https://i.imgur.com/MlRFUM0.mp4)

Unfortunately missing videos for other sections with C2 Jean and C6 amber

Explanation on higher errors when using C6 Amber:  
Sayu E roll lasts 10 seconds, while the bonus from C6 Amber lasts 10s. This requires precise timing and because of it, the error increases.  
The error for just C6 Amber is `0.0251` which is rather acceptable.  
The error for Anemo Resonance + Rosaria + C6 Amber is `0.0326`, which is once again, rather acceptable due to mistiming.  
However getting `Anemo Resonance + Rosaria + C6 Amber + C2 Jean` to work takes a lot of effort - incorrect timing have caused a huge error (`0.1296`!), but I'm submitting this anyway.  
Other tests yielded an error of `<~0.02`, which is acceptable due to start/end velocities change on Sayu roll + uneven terrain.

### Move Speed Increases Jump Height and Double Anemo Allows for Plunge Attacks

**By:** Risuke\#6743  
**Added:** [Component removed]  
**Last tested:** [Component removed]

**Evidence:**  
[Video 1](https://youtu.be/OB6QP67zjNg) [Video 2](https://youtu.be/hfRYtOJB42w)

**Significance:**  
Having increased movespeed is now potentially practical. It allows an additional action to be performed alongside NA and CA. This may allow characters with weaker NAs to perform better.

### Max enemy mvsp decrease

**By:** Recovent#9620  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_876024675489169438_882072456154722304_transcript-max-enemy-mvsp-decrease.html)

**Finding:**  
There is a limit to how much movement speed decreases one can do onto a mob. The limit seems to be an approximate of 80~85% decrease.

* Adding up the different movement speeds, you would get a decrease of 150% speed with the usage of the Charity tower, Glacial Bloom, and Banishment tower. However, this is not the case here. It seems that after a certain point the mob will not have their speed decreased. (This note was assuming additive decrease)

* Although the enemy's movement animations are slowed, and can be seen as though they are going through a slowed time; their knock back effects and being attacked animation's speeds are not changed (can be seen in the first two video links)

* Descriptions of speed decrease don't always match what they actually do

* Different sources of movement speed can conflict with each other differently than a similar type

* The slowness follows a log curve when following the highest movement speed stacking as a base, however, follows (loosely) an exponential decrease when simply following descriptive movement speed decrease.

* The maximum seems to cave towards 80~85% (82% being closer towards the max.) So unless there is a much much higher movement speed decrease Skill, getting anywhere close to 80% movement speed decrease is nigh impossible without at least another movement speed decrease debuff.

* Speed increasing Skills stack alongside these, although this is outside of the scope of this TC, it can be seen with the samuchurl in the first stage being sped up while being in a slow down tower.

* Frame = .033ms for my video editor, thus the frames counted may be within +-.17ms off (unless otherwise stated)

**Evidence:**  
The first 5 are mainly visuals with numbers made through previous attempts to make a formula:  
[YouTube](https://www.youtube.com/watch?v=cvrF9JW4mlE) - (Two Tower; “90%” reduction)  
[YouTube](https://www.youtube.com/watch?v=z4Nw2NBjpiY) - (Three Tower: “150%” reduction)  
[YouTube](https://www.youtube.com/watch?v=FcT9RVHOnas) - (Combinations tested)  
[YouTube](https://www.youtube.com/watch?v=Spa1vVxpqpI) - (Comparison of 70% and 90%)  
[YouTube](https://www.youtube.com/watch?v=XBRMR6vwT-8) - (Most likely multiplicative when multiple mov. decrease are stacked with each other)  
[YouTube](https://www.youtube.com/watch?v=eFHZTdne2UQ) - (Frame counted and placed as SPM (Steps Per Minute.) The sheets below shows the overall data.)

[Spreadsheet](https://docs.google.com/spreadsheets/d/12B-EM7xgonfF5xRLMpZCMW1s6jI3rPJXhd1hOjZGeZ8/edit?usp=sharing) - Sheets with contradictions for any specific formula for movement speed decrease on mobs and slightly conflicting information for certain movement speed decrease towers. Also contains graphs of best fit.

**Significance:**  
If there were ever characters that were able to decrease mob speed (and almost likewise, character speed from mobs) then without a bind, a Freeze status, or similar, mobs will only be slowed and never not be able to ‘stay put’ or be unable to physically move.

### Speed Comparsion Between Walk Jump And Continuous Walk

**By:** Mcpie#8672  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_929185303288217600_930052462809849876_transcript-speed-comparison-walk-jump-vs-continuous-walk.html)

**Finding:**  
Let JW be Jump Walking and CW be Continuous Walking. JW means spamming jump while continuously walking forward while CW means the same, but without any jumps. All models are faster while performing JW.

The ranking from fastest to slowest is:

1. JW Adult Female
2. JW Teen Male
3. JW Adult Male
4. CW Adult Male
5. CW Adult Female
6. JW Teen Female
7. CW Teen Male
8. CW Teen Female
9. JW Child Female
10. CW Child Female

**Evidence:**  
Video displaying side by side comparison of all body types: [YouTube](https://youtu.be/Z8ROXAgikn8)

**Significance:**  
Allows players to pick up best way to move while regenerating stamina.

### Size Does Not Matter

**By:** Mcpie#8672  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_935300027952295957_936412064098955295_transcript-size-does-not-matter.html)

**Finding:**  
Model skeleton height differences do not matter in movement (at least in walking forward).  
Currently tested for adult male model.

**Evidence:**  
[YouTube](https://youtu.be/jdHZWQ5Pbd8)

**Significance:**  
Picking a taller character of the same skeleton model will not increase the velocity or distance covered. Be aware that height DOES matter in walk to swim transition and vice versa.

### Elevator Affects Movement Speed

**By:** Pablos\#1142  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_962133283083280384_transcript-elevator-affects-movement-speed.html)

**Finding:**  
When riding an elevator up and jumping just at the right moment before it stops, we can build up enough upwards momentum to momentarily jump higher than usual and reach sufficient height to open a wind glider. Conversely the same principle applies when riding an elevator on the way down, going down builds enough downwards momentum to visibly diminish the height of jump. This technique works for all character models.

**Evidence:**
* [Wind glider jump](https://imgur.com/a/YRVCmHX)
* [Normal jump](https://imgur.com/a/mM9GuOg)
* [Diminished jump](https://imgur.com/a/TvnGQgD)

**Significance:**  
Fluff and documenting overworld mechanics.  

### Movement Speed And Gliding

**By:** @milktearomance  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/movement-speed-and-gliding)

**Finding:**  
Movement Speed does not affect gliding SPD.  
  
**Evidence:**  
Clip 1: buffed with Lost Prayer, Anemo Resonance, and Dehya basking in the sunlight  
Clip 2: no buffs  
Observed result: both buffed and unbuffed characters took ~15 seconds to cross the gap  
[YouTube](https://youtu.be/p9445Lis2dE)  
  
**Significance:**  
Overworld travel  

## Hitboxes

### Character Hitboxes

**By:** HK\#0001  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_848227425379942411_851738303363547146_transcript-character-hitboxes.html)

**Finding:**  
Character hitboxes extend beyond their model until the weapon floating behind their back. Their front hitbox is of roughly equal size to their back hitbox, the exact bounds are just a bit larger at a similar dimension to Zhongli's Shield radius.

**Evidence:**  
Shots from ranged enemies seem to register beyond the character model until the floating weapon behind the unit’s back. For example, when the Pyroslinger shoots at the gap between Ganyu’s back and her floating bow, [it apparently hits](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_848227425379942411_848227761155735552_Genshin_Impact_2021-05-29_22-12-11.mp4). Secondary test [with a ranged hilichurl](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_848227425379942411_848228285397598248_Genshin_Impact_2021-05-29_21-52-45.mp4).

[Hitbox comparison with Zhongli Shield.](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_848227425379942411_849296459312660491_2021-06-01_22-35-23.mp4)

**Significance:**  
By knowing this, hopefully we can have a better understanding about how far the hitbox of our character model reaches. While this is certainly niche, this can possibly give some people that wants to do a meme run with their character such as a no damage run, an advantage with this findings.

## Time

### Tick Tock

**By:** Tibo\#4309  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/tick-tock-966812234334474371)

**Theory 1:**  
There's a maximum of around ~98ms of time being ticked per frame.  
  
**Evidence 1:**  
[Google Sheets](https://docs.google.com/spreadsheets/d/182KPzD5g2ThH1vIB9VNTYBt7UmY6T_kW23Z6YZhqZMk/edit?usp=sharing)  

**Significance 1:**  
Understanding how the game works at extremely low frame rates or during lagspikes.  
  
**Theory 2:**  
Timers can only start at 0 on ticks; does not carry over lateness.  
  
**Evidence 2:**  
[Google Sheets](https://docs.google.com/spreadsheets/d/182KPzD5g2ThH1vIB9VNTYBt7UmY6T_kW23Z6YZhqZMk/edit#gid=630579272)  

Using Zhongli pillar at different frame rates, looking at resonance ticks.  

Expected to last 30 seconds and resonate every 2 seconds, starting after ~2.1 seconds after CD text starts.  

Actual resonances happen slightly faster at 60 FPS for some reason. Lower frame rates resonate the frame after 2 second mark \(except for frame rates that reach frame time cap\).  
After a tick, the timer resets to 0, without taking the lateness of the frame of the tick into account for the next tick  
  
**Significance 2:**  
A theory for the common "60 vs 30" FPS difference that's common; despawn timers gets out of sync with the DoT timers, causing the amount of times that it triggers to be less at lower FPS.  
  
**Theory 3:**  
There are different \(at least 4\) ways the game keeps track of time.  

1. Real time:  
    * Follows real time without looking at FPS/lag/pausing/the game being open.  
    * Example: Gadget cooldowns.  
    * The 6d22h cooldown of the Parametric Transformer would be a huge pain otherwise.  
2. Cursed time:  
    * Almost follows real time \(disregarding max time per frame cap\), but does pause while game is paused/in menu and can run while you are logging in into the game.  
    * Example: healing food, food cooldowns.  
    * Food cooldown timers start ticking around when you have a connection with the server, this is around when the UID shows up in UI \(if you just logged in; or updates if you changed server; generally slightly after clicking on the door\) and between the 7 Elements start showing up; so the time reduction depends on your system. These times would be classified as "cursed time" since it doesn't care about FPS, which can be seen in the second vid where game freezes and still having 87s being passed \(not taking max time per frame into account\). 
3. Game time:  
    * The time that passes in-universe, does get paused by menus when not in Co-Op, does have a max time that can get processed per frame. But it also does not get affected by hitlag. This can alternatively be explained as *Entity Time* on an entity that doesn't get hitlagged.  
    * Example: Skill cooldowns 
4. Entity time:  
    * The time that passes for an entity/the player, gets paused by menus when not in Co-Op, does have a max time that can get processed per frame, and it also gets affected by hitlag that gets applied to said entity. \(Not global, unique per enemy/the player\)  
    * Example: Skills which duration get extended by hitlag \(e.g.: not deployables\), Elemental auras

**Evidence 3:**  
1. Real time:
    * Red Feather Fan: [YouTube](https://youtu.be/fCtMDH7AFfI)
    * Food and gadgets \(includes Kamera pausing in Co-Op before 2.8\): [YouTube](https://youtu.be/xUbUWGzmVKo)  
2. Cursed time:
    * Does pause while game is paused: [YouTube](https://www.youtube.com/watch?v=Su7Itye024A)  
    * But not in Co-Op w/Kamera pause before 2.8: [YouTube](https://youtu.be/xUbUWGzmVKo)  
    * Does not follow max frame time: [YouTube](https://youtu.be/1ZJnPUpj9iQ), [Google Sheets](https://docs.google.com/spreadsheets/d/1OOoZ2Z1jX583HLZv-TSeg0CFJsWfcv1lFVKCpxKDb7E/edit#gid=0)  
    * Runs while logging in into the game  
    * Initial food usage + relog on PC (119s -> 109s): [YouTube](https://youtu.be/jBlSF0CLaTI)  
    * Laptop login (109 -> 22): [YouTube](https://youtu.be/q7h_Erv-jro)  
    * Logging back in on desktop (22 -> 15): [YouTube](https://youtu.be/tDAmjw-Bp5E)  
    * The exact moment can better be described as when you "take over the world", indicated by the "Account has logged in on another device"; which is shown in last video  
3. Game time:
    * Max time per frame: [YouTube](https://youtu.be/P10o7Sc09zw), [Google Sheets](https://docs.google.com/spreadsheets/d/182KPzD5g2ThH1vIB9VNTYBt7UmY6T_kW23Z6YZhqZMk/edit#gid=0) 
    * Does not follow hitlag: [YouTube](https://youtu.be/apChAKi-mvA) \(CD number is visible from 5.967s and goes invisible at 15.95s \(9.983s\)\)  
    * Hitlag extension caveats: [TCL page](../combat-mechanics/frames.md#hitlag-extension-caveats)  
4. Entity time:
    * Normal Attack hitlag can extend Skill/Burst duration: [TCL page](/docs/evidence/combat-mechanics/frames.md#normal-attack-hitlag-can-extend-skillburst-duration)  
    * Hitlag is per entity: [YouTube](https://youtu.be/3E3R_VEL2UA)  

**Significance 3:**  
This split could potentially be abused even further in the future.  
  
**Theory 4:**  
Game time and cursed time can get out of sync when pause spamming.  
  
**Evidence 4:**  
Spamming pause \(by opening a menu\) and closes it again while under the effect of Holy Water healing causes the healing timer to tick more tha Normally possible.  

Videos:  
* 170 HP Holy Water: [YouTube](https://youtu.be/Nk7nN2lJhG0)  
* 1 HP -> 56.6k HP using a single Delicious Invigorating Kitty Meal: [YouTube](https://youtu.be/1gB9PBp-Emk) / \(sped up: [YouTube](https://youtu.be/eBgNo9Q18pg)\)  
* 60 FPS: [YouTube](https://youtu.be/N6QnWMfnze4) by Puffin\#9920  
  
Possible explanation: these two types of timers have a different "is game paused" check that starts/stops at different points \(*maybe* at different moments within the same frame?\).  
  
**Significance 4:**  
Adding another thing to the pile of "pause game spam" bugs + possible explanation.  
  
**Theory 5:**  
Entities have a "ticking" player bound to them in Co-Op.  
  
**Evidence 5:**  
[YouTube](https://youtu.be/xtc8QIKx7TU)  

* Test 1: P1 loads enemy and uses Kamera to pause game while P2 joins and applies Element - enemy aura gets extended past intended duration, only stops after continuing game \(46 seconds in video\) \(note: Kamera bug is fixed in 2.8\).  
* Test 2: P1 loads enemy and limits FPS while P2 applies Element - enemy aura gets extended past intended duration, will most likely stop after a while since game still runs, just at a slower speed \(48s in video\).  
* Test 3: P1 loads enemy while P2 limits FPS and applies Element - enemy aura stops after ~9.9s \(expected 9.5s\).  
* Test 4: P2 loads enemy, limits FPS and applies Element - enemy aura gets extended past intended duration, \(19s in video while expected 9.5s\).  
  
**Significance 5:**  
Entity time depends on the player who is ticking said enemy, which might not always be the same player as the world host.  
Allows easier abuse of stacking debuffs on enemy since duration doesn't expire.

## Velocity

### Extra velocity gained when hit

**By:** Hatsuharufag\#4291  
**Added:** [Component removed]  
**Last tested:** [Component removed]

**Finding:**  
You gain extra velocity from enemy hits when you jump. This velocity can be used to initiate jump attacks even when normally they should be impossible.

**Evidence:**  
[Video 1](https://www.youtube.com/watch?v=JXbHUYFzuig) I'm using the worst character model for plunge attacks, female(teen). Female(adult) and both male models get more air time and so have easier time executing plunge attacks. [Video 2](https://www.youtube.com/watch?v=hwNx4m_E4cs)

**Significance:**  
Yet another way to initiate plunge attacks on even ground.

## Other

### Items Hate Physics

**By:** Ultimate Noob\#2955  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/items-hate-physics)

**Finding:**  
Items don't care about physics, when they have dropped on the ground they will no longer be updated (things like Swirl exist but won't update if not interacted with). This can be seen by dropping water levels with items on it, such as killing a flying enemy. When the water level drops the item remains at the original position, being unaffected by gravity.

**Evidence:**  
[Imgur](https://imgur.com/a/5Xhdn5Y)  
[Imgur](https://imgur.com/fO8PPnx) \(credit to Aevean Leeow\#1362\)

**Significance:**  
Fluff, Genshin makes 0 sense.

### Push Pull effects

**By:** Saltyfart\#8946  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_843282047161729034_845886074508804096_transcript-push-pull-effects.html)

**Finding:**  
Push/pull effects are dynamic across team members

**Evidence:**

* [Delayed Swap](https://imgur.com/a/vGKRUwy)
* [Instant Swap](https://imgur.com/a/YUJMRtO)
* [Running -&gt; Swap](https://imgur.com/a/t5jKYrh)

Across these 3 videos, there is a consistent interaction of a push effect being generated on Venti, which is then completely nullified when Venti is switched off-field. The timing of the character switch is varied between the clips, but the result is the same.

Practicality of this? Ehhhhhh, there are only two enemies I can think of that generate a force while not knocking the player to the floor- which are the Anemo samachurls and Boreas during his 2nd phase cutscene.

In this [clip](https://imgur.com/a/1q4unpo), character swap ended up making the pull effect reapply for each character swapped in rather then nullifying it. Character swapping inside the little whirlwind made the pull stronger rather than weaker lmao.

We can also see here that the boreas wolf push also applies multiple instances of pushes rather than a single big push, making the character swap ineffective here too. At this point, I realized that the devs probably knew players would probably find a method to negate push effects, so push effects were coded in a way to prevent negating them.

**Significance:** Maybe when miHoYo adds an enemy that does a single instance of a push vs the player \(which would probably never happen\)- this information could be helpful. But outside of that, the only significant thing here to learn is don’t switch characters while you are in an Anemo samachurl pull /or against any other enemy that spams a push effect in the future I guess.

### Waypoint Teleport Variance

**By:** Mcpie\#8672  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_846494202334412901_849908480075628574_transcript-waypoint-teleportation-inconsistency.html)

**Findings:**  
Two possible findings:

* Teleporting to a waypoint does not always teleport you to the same coordinates
* Dashing off a cliff horizontal velocity might be dependant on current character action, like idle animation, idle jump or a character switch.

**Evidence:**  
Two videos of Zhongli \(a lot of takes\) dashing from the top of Qingyun Peak \(waypoint\) without prior movement resulted with landing in locations separated by &lt; 1m.

Image 1: [Consistent landing location](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_846494202334412901_846495239493779466_2021-05-24_22-42-44-06.41.533-06.59.817-audio.webm_snapshot_00_00_15_2021.05.24.jpg) \(&gt;20 attempts, almost always in this spot\)

Image 2: [Location that is a bit further than the landing spot from image 1](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_846494202334412901_846495391162695690_2021-05-24_22-42-44-04.22.333-04.37.900-audio.webm_snapshot_00_00_13_2021.05.24.jpg)

[Video proof for images](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/movement-and-physics.md/discord/attachments_846494202334412901_846495546289291304_2021-05-24_22-42-44-04.22.333-04.37.900-audio.webm)

Additional video showing 4 adult male models, landing location very rarely differs: [YouTube](https://youtu.be/QPR38O5yM7M)

**Significance:** Might skew the results from Cliff Dash Displacement.

### You Can Push People Underwater

**By:** @staryy_  
**Added:** [Component removed]  
**Last tested:** [Component removed]  
[Discussion](https://tickets.deeznuts.moe/transcripts/you-can-push-people-underwater)

**Finding:** You can push other players underwater in coop  
  
**Evidence:** [YouTube](https://youtu.be/bxfScvQslJQ)  
  
**Significance:** afk movement method