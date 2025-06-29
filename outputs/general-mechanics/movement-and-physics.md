# Movement and Physics

## Bunny Hopping

Bunny hopping can let you scale walls without using stamina and it also allows you to move efficiently in the overworld. It is easiest used with teenage male model characters. This technique can also be used to scale up walls without climbing or using stamina.

* [Guide by Arch- er](https://youtu.be/3bY_vUgHY_g)
* [Climbing showcase by Nitley\#3485](https://youtu.be/n56JICDn1Eg)

## Optimal Movement Tech

**Short Distance** = The distance you're able to sprint with 1 full bar of stamina \(assuming 240 max\).  
**Long Distance** = The distance traveled by sprinting with a full bar of stamina and continued travel until complete stamina regen.

The fastest movement technique for a short distance is to chain dashes together with equal spacing between them with an adult male as they have the biggest strides. This will ensure your dash has more uptime than simply dash spamming.

For long-distance you will do the same, dash chaining with maximum dash uptime on an adult male then switching to a teen male for the last dash of your stamina charge and chaining b-hops from thereon.

**Note:** This does not account for special dashes such as Mona.

When not using dashes, or while regenerating stamina, it is faster to spam jump constantly instead of walking.  
Let JW be Jump Walking and Continuous Walking. JW means spamming jump while continuously walking forward while CW means the same, but without any jumps.

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

Note that picking a taller character of the same skeleton model will not increase the velocity or distance covered.

## Push/Pull Effects

Push/pull effects are dynamic across team members

* [Instant Swap](https://imgur.com/a/YUJMRtO)
* [Delayed Swap](https://imgur.com/a/vGKRUwy)

## Cliff Dash Displacement

The position at which you land after dashing off a cliff is dependent on the current velocity of the dash animation when you go over the cliff. The ranking for dash initial velocity of character models is as follows:

1. Adult Male
2. Adolescent Male
3. Baby Female
4. Adult Female
5. Adolescent Female

This explains why, despite visually having similar character heights, teen female models can't initiate dash-jump-plunge on flat surface against vast majority of enemies while teen male models can.

## Waypoint Teleportation Variance

Teleporting to a waypoint does not always teleport you to the same coordinates or dashing off a cliff horizontal velocity might be dependant on current character action, like idle animation, idle jump or a character switch.

## Movement Speed

Increased movement speed increases the horizontal velocity of dashing. This also impacts the distance traveled when dashing off a cliff.  
All movement speed buffs stack additively.  
Movement Speed does not affect gliding SPD.

## Enemy Movement Speed

There is a limit to how much movement speed decreases one can do onto an enemy. The limit seems to be an approximate of 80~85% decrease.

## Character Hitboxes

Character hitboxes extend beyond their model until the weapon floating behind their back. Their front hitbox is of roughly equal size to their back hitbox, the exact bounds are just a bit larger at a similar dimension to Zhongli's Shield radius.

## Swimming

Tapping shift while swimming has a stamina cost that is only a little higher than not holding shift, but the swimming speed is almost as fast as holding shift.

Turning while swimming drains extra Stamina, so swimming in straight lines should be done whenever possible.  

All character models swim at the same speed underwater. 

Repeatedly tapping swim underwater leads to faster travel speed than holding swim.  

Fontanians (and the Traveler of any Element) can dolphin jump out of the waters of Fontaine while characters from other regions simply surface when they reach the top of the water.  

## Infinite Dashing

Double dashing with a pause in between to regain stamina can allow for a faster way to move continuously.

## Cliff Dashing

Dashing off of cliffs can speed up fall speed.

## Consecutive Dashing

The Consecutive Dash Cooldown trigger is 0.8 seconds.

## Jump Extension

Getting hit while jumping adds extra velocity if not staggered.

## Elevators

When riding an elevator up and jumping just at the right moment before it stops, we can build up enough upwards momentum to momentarily jump higher than usual and reach sufficient height to open a wind glider. Conversely the same principle applies when riding an elevator on the way down, going down builds enough downwards momentum to visibly diminish the height of jump. This technique works for all character models.

## Items

Items are not affected by gravity and will float in mid-air if the surface they were on is lowered.

## Time

There's a maximum of around ~98ms of time being ticked per frame when limiting the game's FPS. Timers can only start at 0 on ticks, and do not carry over lateness.

There are multiple ways the game keeps track of time, currently the following are known:  

1. Real time does not look at FPS/lag/pausing/the game being open.
2. Cursed time almost follows real time \(disregarding max time per frame cap\), but does pause while game is paused/in menu and can run while you are logging in into the game.
    * It can get out of sync when pause spamming.
3. Game time is the time that passes in-universe, it get paused by menus when not in Co-Op and has a max time that can get processed per frame. But it also does not get affected by hitlag. This can alternatively be explained as *Entity Time* on an entity that doesn't get hitlagged.
    * It can get out of sync when pause spamming.
4. Entity time is the time that passes for an entity/the player, gets paused by menus when not in Co-Op, has a max time that can get processed per frame, and it also gets affected by hitlag that gets applied to said entity. \(Not global, unique per enemy/the player\)
    * It depends on the player who is ticking said enemy, which might not always be the same player as the world host.

## Evidence Vault

[Component removed]