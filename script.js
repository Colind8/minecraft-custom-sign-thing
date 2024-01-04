coords = "-37 -63 -37";
name =   "four_corners.bsp";
author = "manofallkind / Caves";
color = "green";
/*
green: normal maps
aqua:  beta maps
*/

document.getElementById("bruh").innerHTML = `/give @p minecraft:spruce_sign{BlockEntityTag:{Text1:'{"text":"","clickEvent":{"action":"run_command","value":"setblock ${coords} minecraft:redstone_block"}}',Text2:'{"text":"${name}"}',Text3:'{"text":"","clickEvent":{"action":"run_command","value":"execute as @a at @s run playsound minecraft:block.bell.use master @s ~ ~ ~ 1000 1.5"}}',Text4:'{"text":"","clickEvent":{"action":"run_command","value":"tellraw @a [\\\\"\\\\",{\\\\"text\\\\":\\\\"Selected: \\\\",\\\\"bold\\\\":true,\\\\"color\\\\":\\\\"dark_green\\\\"},{\\\\"text\\\\":\\\\"${name}\\\\",\\\\"underlined\\\\":true,\\\\"color\\\\":\\\\"${color}\\\\",\\\\"hoverEvent\\\\":{\\\\"action\\\\":\\\\"show_text\\\\",\\\\"contents\\\\":[{\\\\"text\\\\":\\\\"Created by ${author}\\\\",\\\\"italic\\\\":true}]}}]"}}'},display:{Name:'{"text":"${name}"}'}}`

//document.getElementById("bruh").innerHTML = `/give @p minecraft:spruce_sign{BlockEntityTag:{Text1:'{"text":"","clickEvent":{"action":"run_command","value":"setblock ${coords} minecraft:redstone_block"}}',Text2:'{"text":"name.bsp","clickEvent":{"action":"run_command","value":"execute as @a at @s run playsound minecraft:block.bell.use master @s ~ ~ ~ 1000 1.5"}}',Text3:'{"text":"","clickEvent":{"action":"run_command","value":"tellraw @a [\\\\"\\\\",{\\\\"text\\\\":\\\\"Selected: \\\\",\\\\"bold\\\\":true,\\\\"color\\\\":\\\\"dark_green\\\\"},{\\\\"text\\\\":\\\\"${name}\\\\",\\\\"underlined\\\\":true,\\\\"color\\\\":\\\\"${color}\\\\",\\\\"hoverEvent\\\\":{\\\\"action\\\\":\\\\"show_text\\\\",\\\\"contents\\\\":[{\\\\"text\\\\":\\\\"Created by ${author}\\\\",\\\\"italic\\\\":true}]"}}'},display:{Name:'{"text":"${name}"}'}}`

//`/give @p spruce_sign{BlockEntityTag:{front_text:{messages:['[""]','["name.bsp"]','[""]','[""]'],has_glowing_text:1}},display:{Name:'["",{"text":"${name}","italic":false}]'}}`

document.getElementById("bruh").innerHTML = `/give @p minecraft:spruce_sign{BlockEntityTag:{front_text:{messages:['[{"text":"","clickEvent":{"action":"run_command","value":"setblock ${coords} minecraft:redstone_block"}}]','[{"text":"${name}"}]','[{"text":"","clickEvent":{"action":"run_command","value":"execute as @a at @s run playsound minecraft:block.bell.use master @s ~ ~ ~ 1000 1.5"}}]','[{"text":"","clickEvent":{"action":"run_command","value":"tellraw @a [\\\\"\\\\",{\\\\"text\\\\":\\\\"Selected: \\\\",\\\\"bold\\\\":true,\\\\"color\\\\":\\\\"dark_green\\\\"},{\\\\"text\\\\":\\\\"${name}\\\\",\\\\"underlined\\\\":true,\\\\"color\\\\":\\\\"${color}\\\\",\\\\"hoverEvent\\\\":{\\\\"action\\\\":\\\\"show_text\\\\",\\\\"contents\\\\":[{\\\\"text\\\\":\\\\"Created by ${author}\\\\",\\\\"italic\\\\":true}]}}]"}}]'],has_glowing_text:1}},display:{Name:'["",{"text":"${name}","italic":false}]'}}`

/*

tellraw @a ["",{"text":"Selected: ","bold":true,"color":"dark_green"},{"text":"${name}","underlined":true,"color":"${color}","hoverEvent":{"action":"show_text","contents":[{"text":"Created by ${author}","italic":true}]}}]

*/