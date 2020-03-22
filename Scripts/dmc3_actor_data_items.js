ACTOR_DATA_ITEMS =
[
	[ "characterLogic"           , "uint8"       , 1 , 0x78   ],
	[ "position"                 , "vec4"        , 1 , 0x80   ],
	[ "direction"                , "uint16"      , 1 , 0xC0   ],
	[ "actorId"                  , "uint8"       , 1 , 0x118  ],
	[ "isDoppelganger"           , "bool"        , 1 , 0x11C  ],
	[ "visible"                  , "uint8"       , 1 , 0x120  ],
	[ "motionFile"               , "byte8 *"     , 32, 0x38A0 ],
	[ "motionData"               , "MOTION_DATA" , 5 , 0x39B0 ],
	[ "shadow"                   , "uint8"       , 1 , 0x3A18 ],
	[ "color"                    , "byte32"      , 1 , 0x3A28 ],
	[ "motionState1"             , "byte32"      , 4 , 0x3E00 ],
	[ "chargedShotAir"           , "uint16"      , 1 , 0x3E1A ],
	[ "chargedShot"              , "uint16"      , 1 , 0x3E22 ],
	[ "idleTimer"                , "float32"     , 1 , 0x3E38 ],
	[ "motionState2"             , "byte32"      , 3 , 0x3E60 ],
	[ "activeModel"              , "uint8"       , 1 , 0x3E6C ],
	[ "queuedModel"              , "uint8"       , 1 , 0x3E70 ],
	[ "modelIndex"               , "uint8"       , 3 , 0x3E74 ],
	[ "modelState"               , "uint8"       , 1 , 0x3E80 ],
	[ "lockOn"                   , "bool"        , 1 , 0x3E84 ],
	[ "modelIndexMirror"         , "uint8"       , 1 , 0x3E88 ],
	[ "devilState"               , "uint8"       , 1 , 0x3E94 ],
	[ "devil"                    , "bool"        , 1 , 0x3E9B ],
	[ "costume"                  , "uint8"       , 1 , 0x3E9E ],
	[ "specialCostume"           , "bool"        , 1 , 0x3E9F ],
	[ "magicPoints"              , "float32"     , 1 , 0x3EB8 ],
	[ "maxMagicPoints"           , "float32"     , 1 , 0x3EBC ],
	[ "move"                     , "uint8"       , 1 , 0x3FA4 ],
	[ "lastMove"                 , "uint8"       , 1 , 0x3FA5 ],
	[ "chainCount"               , "uint8"       , 1 , 0x3FAC ],
	[ "expertise"                , "byte32"      , 16, 0x3FEC ],
	[ "maxHitPoints"             , "float32"     , 1 , 0x40EC ],
	[ "hitPoints"                , "float32"     , 1 , 0x411C ],
	[ "targetBaseAddr"           , "byte8 *"     , 1 , 0x6328 ],
	[ "style"                    , "uint8"       , 1 , 0x6338 ],
	[ "styleLevel"               , "uint8"       , 1 , 0x6358 ],
	[ "dashCount"                , "uint8"       , 1 , 0x635C ],
	[ "skyStarCount"             , "uint8"       , 1 , 0x635D ],
	[ "airTrickCount"            , "uint8"       , 1 , 0x635E ],
	[ "trickUpCount"             , "uint8"       , 1 , 0x635F ],
	[ "trickDownCount"           , "uint8"       , 1 , 0x6360 ],
	[ "quicksilver"              , "bool"        , 1 , 0x6361 ],
	[ "doppelganger"             , "bool"        , 1 , 0x6362 ],
	[ "styleExperience"          , "float32"     , 1 , 0x6364 ],
	[ "controlLinkedActor"       , "bool"        , 1 , 0x6454 ],
	[ "linkedActorBaseAddr"      , "byte8 *"     , 1 , 0x6478 ],
	[ "selectedMeleeWeaponVergil", "uint8"       , 1 , 0x6488 ],
	[ "activeWeapon"             , "uint8"       , 1 , 0x648D ],
	[ "selectedMeleeWeapon"      , "uint8"       , 1 , 0x6490 ],
	[ "selectedRangedWeapon"     , "uint8"       , 1 , 0x6494 ],
	[ "equipment"                , "uint8"       , 4 , 0x6498 ],
	[ "weaponMetadata"           , "byte8 *"     , 4 , 0x64A0 ],
	[ "weaponFlags"              , "byte32"      , 4 , 0x64C8 ],
	[ "activeMeleeWeapon"        , "uint8"       , 1 , 0x64F0 ],
	[ "activeRangedWeapon"       , "uint8"       , 1 , 0x64F1 ],
	[ "weaponTimer"              , "float32"     , 4 , 0x64F4 ],
	[ "styleRank"                , "uint8"       , 1 , 0x6510 ],
	[ "styleMeter"               , "float32"     , 1 , 0x6514 ],
	[ "inputData"                , "INPUT_DATA"  , 58, 0x6674 ],
	[ "interactionData"          , "vec4"        , 8 , 0x7460 ],
	[ "buttonInput"              , "byte16"      , 4 , 0x74E0 ],
	[ "modelData"                , "MODEL_DATA"  , 6 , 0xB630 ],
	[ "artemisChargeValue"       , "float32"     , 2 , 0xB868 ],
	[ "artemisChargeFlags"       , "byte32"      , 2 , 0xB87C ],
	[ "isDefault"                , "bool"        , 1 , 0xB8C0 ],
	[ "character"                , "uint8"       , 1 , 0xB8C1 ],
	[ "noCollision"              , "bool"        , 1 , 0xB8C2 ],
	[ "hide"                     , "bool"        , 1 , 0xB8C3 ],
];
