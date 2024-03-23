---
sidebar_position: 6
---

# Triggers | 触发器

## Table of Content

* [ACE](#triggers-for-scope-ace)
* [CHARACTER](#triggers-for-scope-character)
* [COMBATANT](#triggers-for-scope-combatant)
* [COUNTRY](#triggers-for-scope-country)
* [OPERATION](#triggers-for-scope-operation)
* [STATE](#triggers-for-scope-state)
* [STRATEGIC_REGION](#triggers-for-scope-strategic_region)
* [any](#triggers-for-scope-any)

## Triggers for scope ACE

* [hidden_trigger](#hidden_trigger)
* [is_female](#is_female)
* [meta_trigger](#meta_trigger)

## Triggers for scope CHARACTER

* [attack_skill_level](#attack_skill_level)
* [average_stats](#average_stats)
* [can_be_country_leader](#can_be_country_leader)
* [can_select_trait](#can_select_trait)
* [defense_skill_level](#defense_skill_level)
* [has_ability](#has_ability)
* [has_air_ledger](#has_air_ledger)
* [has_army_ledger](#has_army_ledger)
* [has_character_flag](#has_character_flag)
* [has_dynamic_modifier](#has_dynamic_modifier)
* [has_id](#has_id)
* [has_ideology](#has_ideology)
* [has_ideology_group](#has_ideology_group)
* [has_nationality](#has_nationality)
* [has_navy_ledger](#has_navy_ledger)
* [has_trait](#has_trait)
* [has_unit_leader_flag](#has_unit_leader_flag)
* [hidden_trigger](#hidden_trigger)
* [is_advisor](#is_advisor)
* [is_air_chief](#is_air_chief)
* [is_army_chief](#is_army_chief)
* [is_army_leader](#is_army_leader)
* [is_assigned](#is_assigned)
* [is_border_war](#is_border_war)
* [is_character](#is_character)
* [is_character_slot](#is_character_slot)
* [is_corps_commander](#is_corps_commander)
* [is_country_leader](#is_country_leader)
* [is_exiled_leader](#is_exiled_leader)
* [is_exiled_leader_from](#is_exiled_leader_from)
* [is_female](#is_female)
* [is_field_marshal](#is_field_marshal)
* [is_high_command](#is_high_command)
* [is_leading_army](#is_leading_army)
* [is_leading_army_group](#is_leading_army_group)
* [is_leading_volunteer_group](#is_leading_volunteer_group)
* [is_leading_volunteer_group_with_original_country](#is_leading_volunteer_group_with_original_country)
* [is_navy_chief](#is_navy_chief)
* [is_navy_leader](#is_navy_leader)
* [is_operative](#is_operative)
* [is_operative_captured](#is_operative_captured)
* [is_political_advisor](#is_political_advisor)
* [is_theorist](#is_theorist)
* [is_unit_leader](#is_unit_leader)
* [logistics_skill_level](#logistics_skill_level)
* [meta_trigger](#meta_trigger)
* [not_already_hired_except_as](#not_already_hired_except_as)
* [num_units](#num_units)
* [operative_leader_mission](#operative_leader_mission)
* [operative_leader_operation](#operative_leader_operation)
* [planning_skill_level](#planning_skill_level)
* [skill](#skill)

## Triggers for scope COMBATANT

* [armor](#armor)
* [attack_skill_level](#attack_skill_level)
* [average_stats](#average_stats)
* [can_select_trait](#can_select_trait)
* [defense_skill_level](#defense_skill_level)
* [dig_in](#dig_in)
* [fastest_unit](#fastest_unit)
* [frontage_full](#frontage_full)
* [hardness](#hardness)
* [has_carrier_airwings_in_own_combat](#has_carrier_airwings_in_own_combat)
* [has_carrier_airwings_on_mission](#has_carrier_airwings_on_mission)
* [has_cavalry_ratio](#has_cavalry_ratio)
* [has_combat_modifier](#has_combat_modifier)
* [has_flanked_opponent](#has_flanked_opponent)
* [has_max_planning](#has_max_planning)
* [has_reserves](#has_reserves)
* [has_trait](#has_trait)
* [hidden_trigger](#hidden_trigger)
* [is_amphibious_invasion](#is_amphibious_invasion)
* [is_attacker](#is_attacker)
* [is_border_war](#is_border_war)
* [is_defender](#is_defender)
* [is_fighting_air_units](#is_fighting_air_units)
* [is_fighting_in_terrain](#is_fighting_in_terrain)
* [is_fighting_in_weather](#is_fighting_in_weather)
* [is_leading_volunteer_group](#is_leading_volunteer_group)
* [is_leading_volunteer_group_with_original_country](#is_leading_volunteer_group_with_original_country)
* [is_winning](#is_winning)
* [less_combat_width_than_opponent](#less_combat_width_than_opponent)
* [logistics_skill_level](#logistics_skill_level)
* [meta_trigger](#meta_trigger)
* [min_planning](#min_planning)
* [night](#night)
* [phase](#phase)
* [planning_skill_level](#planning_skill_level)
* [recon_advantage](#recon_advantage)
* [reserves](#reserves)
* [skill](#skill)
* [skill_advantage](#skill_advantage)
* [tag](#tag)
* [temperature](#temperature)

## Triggers for scope COUNTRY

- [Triggers | 触发器](#triggers--触发器)
	- [Table of Content](#table-of-content)
	- [Triggers for scope ACE](#triggers-for-scope-ace)
	- [Triggers for scope CHARACTER](#triggers-for-scope-character)
	- [Triggers for scope COMBATANT](#triggers-for-scope-combatant)
	- [Triggers for scope COUNTRY](#triggers-for-scope-country)
	- [Triggers for scope OPERATION](#triggers-for-scope-operation)
	- [Triggers for scope STATE](#triggers-for-scope-state)
	- [Triggers for scope STRATEGIC\_REGION](#triggers-for-scope-strategic_region)
	- [Triggers for scope any](#triggers-for-scope-any)
	- [All Triggers](#all-triggers)
		- [add\_to\_temp\_array](#add_to_temp_array)
		- [add\_to\_temp\_variable](#add_to_temp_variable)
		- [agency\_upgrade\_number](#agency_upgrade_number)
		- [ai\_has\_role\_division](#ai_has_role_division)
		- [ai\_has\_role\_template](#ai_has_role_template)
		- [ai\_irrationality](#ai_irrationality)
		- [ai\_liberate\_desire](#ai_liberate_desire)
		- [ai\_wants\_divisions](#ai_wants_divisions)
		- [all\_allied\_country](#all_allied_country)
		- [all\_army\_leader](#all_army_leader)
		- [all\_character](#all_character)
		- [all\_controlled\_state](#all_controlled_state)
		- [all\_core\_state](#all_core_state)
		- [all\_country](#all_country)
		- [all\_country\_with\_original\_tag](#all_country_with_original_tag)
		- [all\_enemy\_country](#all_enemy_country)
		- [all\_guaranteed\_country](#all_guaranteed_country)
		- [all\_navy\_leader](#all_navy_leader)
		- [all\_neighbor\_country](#all_neighbor_country)
		- [all\_neighbor\_state](#all_neighbor_state)
		- [all\_occupied\_country](#all_occupied_country)
		- [all\_of](#all_of)
		- [all\_of\_scopes](#all_of_scopes)
		- [all\_operative\_leader](#all_operative_leader)
		- [all\_other\_country](#all_other_country)
		- [all\_owned\_state](#all_owned_state)
		- [all\_state](#all_state)
		- [all\_subject\_countries](#all_subject_countries)
		- [all\_unit\_leader](#all_unit_leader)
		- [alliance\_naval\_strength\_ratio](#alliance_naval_strength_ratio)
		- [alliance\_strength\_ratio](#alliance_strength_ratio)
		- [always](#always)
		- [amount\_manpower\_in\_deployment\_queue](#amount_manpower_in_deployment_queue)
		- [amount\_research\_slots](#amount_research_slots)
		- [amount\_taken\_ideas](#amount_taken_ideas)
		- [and](#and)
		- [any\_allied\_country](#any_allied_country)
		- [any\_army\_leader](#any_army_leader)
		- [any\_character](#any_character)
		- [any\_claim](#any_claim)
		- [any\_controlled\_state](#any_controlled_state)
		- [any\_core\_state](#any_core_state)
		- [any\_country](#any_country)
		- [any\_country\_with\_original\_tag](#any_country_with_original_tag)
		- [any\_enemy\_country](#any_enemy_country)
		- [any\_guaranteed\_country](#any_guaranteed_country)
		- [any\_home\_area\_neighbor\_country](#any_home_area_neighbor_country)
		- [any\_navy\_leader](#any_navy_leader)
		- [any\_neighbor\_country](#any_neighbor_country)
		- [any\_neighbor\_state](#any_neighbor_state)
		- [any\_occupied\_country](#any_occupied_country)
		- [any\_of](#any_of)
		- [any\_of\_scopes](#any_of_scopes)
		- [any\_operative\_leader](#any_operative_leader)
		- [any\_other\_country](#any_other_country)
		- [any\_owned\_state](#any_owned_state)
		- [any\_province\_building\_level](#any_province_building_level)
		- [any\_state](#any_state)
		- [any\_subject\_country](#any_subject_country)
		- [any\_unit\_leader](#any_unit_leader)
		- [any\_war\_score](#any_war_score)
		- [area](#area)
		- [armor](#armor)
		- [army\_manpower\_in\_state](#army_manpower_in_state)
		- [attack\_skill\_level](#attack_skill_level)
		- [average\_stats](#average_stats)
		- [can\_be\_country\_leader](#can_be_country_leader)
		- [can\_build\_railway](#can_build_railway)
		- [can\_declare\_war\_on](#can_declare_war_on)
		- [can\_research](#can_research)
		- [can\_select\_trait](#can_select_trait)
		- [casualties](#casualties)
		- [casualties\_inflicted\_by](#casualties_inflicted_by)
		- [casualties\_k](#casualties_k)
		- [check\_variable](#check_variable)
		- [civilwar\_target](#civilwar_target)
		- [clamp\_temp\_variable](#clamp_temp_variable)
		- [clear\_temp\_array](#clear_temp_array)
		- [command\_power](#command_power)
		- [command\_power\_daily](#command_power_daily)
		- [compare\_autonomy\_progress\_ratio](#compare_autonomy_progress_ratio)
		- [compare\_autonomy\_state](#compare_autonomy_state)
		- [compare\_intel\_with](#compare_intel_with)
		- [compliance](#compliance)
		- [compliance\_speed](#compliance_speed)
		- [conscription\_ratio](#conscription_ratio)
		- [controls\_province](#controls_province)
		- [controls\_state](#controls_state)
		- [convoy\_threat](#convoy_threat)
		- [core\_compliance](#core_compliance)
		- [core\_resistance](#core_resistance)
		- [count\_triggers](#count_triggers)
		- [country\_exists](#country_exists)
		- [current\_conscription\_amount](#current_conscription_amount)
		- [custom\_trigger\_tooltip](#custom_trigger_tooltip)
		- [date](#date)
		- [days\_since\_capitulated](#days_since_capitulated)
		- [days\_since\_last\_strategic\_bombing](#days_since_last_strategic_bombing)
		- [decryption\_progress](#decryption_progress)
		- [defense\_skill\_level](#defense_skill_level)
		- [difficulty](#difficulty)
		- [dig\_in](#dig_in)
		- [distance\_to](#distance_to)
		- [divide\_temp\_variable](#divide_temp_variable)
		- [divisions\_in\_border\_state](#divisions_in_border_state)
		- [divisions\_in\_state](#divisions_in_state)
		- [enemies\_naval\_strength\_ratio](#enemies_naval_strength_ratio)
		- [enemies\_strength\_ratio](#enemies_strength_ratio)
		- [estimated\_intel\_max\_armor](#estimated_intel_max_armor)
		- [estimated\_intel\_max\_piercing](#estimated_intel_max_piercing)
		- [exists](#exists)
		- [fastest\_unit](#fastest_unit)
		- [find\_highest\_in\_array](#find_highest_in_array)
		- [find\_lowest\_in\_array](#find_lowest_in_array)
		- [focus\_progress](#focus_progress)
		- [foreign\_manpower](#foreign_manpower)
		- [free\_building\_slots](#free_building_slots)
		- [frontage\_full](#frontage_full)
		- [fuel\_ratio](#fuel_ratio)
		- [game\_rules\_allow\_achievements](#game_rules_allow_achievements)
		- [garrison\_manpower\_need](#garrison_manpower_need)
		- [get\_highest\_scored\_country\_temp](#get_highest_scored_country_temp)
		- [get\_sorted\_scored\_countries\_temp](#get_sorted_scored_countries_temp)
		- [gives\_military\_access\_to](#gives_military_access_to)
		- [hardness](#hardness)
		- [has\_ability](#has_ability)
		- [has\_active\_mission](#has_active_mission)
		- [has\_active\_resistance](#has_active_resistance)
		- [has\_added\_tension\_amount](#has_added_tension_amount)
		- [has\_air\_experience](#has_air_experience)
		- [has\_air\_ledger](#has_air_ledger)
		- [has\_allowed\_idea\_with\_traits](#has_allowed_idea_with_traits)
		- [has\_annex\_war\_goal](#has_annex_war_goal)
		- [has\_any\_custom\_difficulty\_setting](#has_any_custom_difficulty_setting)
		- [has\_any\_license](#has_any_license)
		- [has\_army\_experience](#has_army_experience)
		- [has\_army\_ledger](#has_army_ledger)
		- [has\_army\_manpower](#has_army_manpower)
		- [has\_army\_size](#has_army_size)
		- [has\_attache](#has_attache)
		- [has\_attache\_from](#has_attache_from)
		- [has\_autonomy\_state](#has_autonomy_state)
		- [has\_available\_idea\_with\_traits](#has_available_idea_with_traits)
		- [has\_border\_war](#has_border_war)
		- [has\_border\_war\_between](#has_border_war_between)
		- [has\_border\_war\_with](#has_border_war_with)
		- [has\_built](#has_built)
		- [has\_capitulated](#has_capitulated)
		- [has\_captured\_operative](#has_captured_operative)
		- [has\_carrier\_airwings\_in\_own\_combat](#has_carrier_airwings_in_own_combat)
		- [has\_carrier\_airwings\_on\_mission](#has_carrier_airwings_on_mission)
		- [has\_cavalry\_ratio](#has_cavalry_ratio)
		- [has\_character](#has_character)
		- [has\_character\_flag](#has_character_flag)
		- [has\_civil\_war](#has_civil_war)
		- [has\_claimed\_state\_in\_peace\_conference](#has_claimed_state_in_peace_conference)
		- [has\_collaboration](#has_collaboration)
		- [has\_combat\_modifier](#has_combat_modifier)
		- [has\_completed\_focus](#has_completed_focus)
		- [has\_core\_occupation\_modifier](#has_core_occupation_modifier)
		- [has\_cosmetic\_tag](#has_cosmetic_tag)
		- [has\_country\_custom\_difficulty\_setting](#has_country_custom_difficulty_setting)
		- [has\_country\_flag](#has_country_flag)
		- [has\_country\_leader](#has_country_leader)
		- [has\_country\_leader\_ideology](#has_country_leader_ideology)
		- [has\_country\_leader\_with\_trait](#has_country_leader_with_trait)
		- [has\_custom\_difficulty\_setting](#has_custom_difficulty_setting)
		- [has\_damaged\_buildings](#has_damaged_buildings)
		- [has\_decision](#has_decision)
		- [has\_defensive\_war](#has_defensive_war)
		- [has\_defensive\_war\_with](#has_defensive_war_with)
		- [has\_deployed\_air\_force\_size](#has_deployed_air_force_size)
		- [has\_design\_based\_on](#has_design_based_on)
		- [has\_dlc](#has_dlc)
		- [has\_done\_agency\_upgrade](#has_done_agency_upgrade)
		- [has\_dynamic\_modifier](#has_dynamic_modifier)
		- [has\_elections](#has_elections)
		- [has\_equipment](#has_equipment)
		- [has\_event\_target](#has_event_target)
		- [has\_finished\_collecting\_for\_operation](#has_finished_collecting_for_operation)
		- [has\_flanked\_opponent](#has_flanked_opponent)
		- [has\_focus\_tree](#has_focus_tree)
		- [has\_fuel](#has_fuel)
		- [has\_full\_control\_of\_state](#has_full_control_of_state)
		- [has\_game\_rule](#has_game_rule)
		- [has\_global\_flag](#has_global_flag)
		- [has\_government](#has_government)
		- [has\_guaranteed](#has_guaranteed)
		- [has\_id](#has_id)
		- [has\_idea](#has_idea)
		- [has\_idea\_with\_trait](#has_idea_with_trait)
		- [has\_ideology](#has_ideology)
		- [has\_ideology\_group](#has_ideology_group)
		- [has\_intelligence\_agency](#has_intelligence_agency)
		- [has\_legitimacy](#has_legitimacy)
		- [has\_license](#has_license)
		- [has\_manpower](#has_manpower)
		- [has\_manpower\_for\_recruit\_change\_to](#has_manpower_for_recruit_change_to)
		- [has\_max\_planning](#has_max_planning)
		- [has\_military\_access\_to](#has_military_access_to)
		- [has\_mined](#has_mined)
		- [has\_mines](#has_mines)
		- [has\_nationality](#has_nationality)
		- [has\_navy\_experience](#has_navy_experience)
		- [has\_navy\_ledger](#has_navy_ledger)
		- [has\_navy\_size](#has_navy_size)
		- [has\_non\_aggression\_pact\_with](#has_non_aggression_pact_with)
		- [has\_occupation\_modifier](#has_occupation_modifier)
		- [has\_offensive\_war](#has_offensive_war)
		- [has\_offensive\_war\_with](#has_offensive_war_with)
		- [has\_operation\_token](#has_operation_token)
		- [has\_opinion](#has_opinion)
		- [has\_opinion\_modifier](#has_opinion_modifier)
		- [has\_political\_power](#has_political_power)
		- [has\_railway\_connection](#has_railway_connection)
		- [has\_railway\_level](#has_railway_level)
		- [has\_relation\_modifier](#has_relation_modifier)
		- [has\_reserves](#has_reserves)
		- [has\_resistance](#has_resistance)
		- [has\_resources\_amount](#has_resources_amount)
		- [has\_rule](#has_rule)
		- [has\_stability](#has_stability)
		- [has\_start\_date](#has_start_date)
		- [has\_state\_category](#has_state_category)
		- [has\_state\_flag](#has_state_flag)
		- [has\_subject](#has_subject)
		- [has\_tech](#has_tech)
		- [has\_tech\_bonus](#has_tech_bonus)
		- [has\_template](#has_template)
		- [has\_template\_ai\_majority\_unit](#has_template_ai_majority_unit)
		- [has\_template\_containing\_unit](#has_template_containing_unit)
		- [has\_template\_majority\_unit](#has_template_majority_unit)
		- [has\_terrain](#has_terrain)
		- [has\_trait](#has_trait)
		- [has\_unit\_leader](#has_unit_leader)
		- [has\_unit\_leader\_flag](#has_unit_leader_flag)
		- [has\_variable](#has_variable)
		- [has\_volunteers\_amount\_from](#has_volunteers_amount_from)
		- [has\_war](#has_war)
		- [has\_war\_support](#has_war_support)
		- [has\_war\_together\_with](#has_war_together_with)
		- [has\_war\_with](#has_war_with)
		- [has\_wargoal\_against](#has_wargoal_against)
		- [hidden\_trigger](#hidden_trigger)
		- [ic\_ratio](#ic_ratio)
		- [if](#if)
		- [impassable](#impassable)
		- [intel\_level\_over](#intel_level_over)
		- [is\_active\_decryption\_bonuses\_enabled](#is_active_decryption_bonuses_enabled)
		- [is\_advisor](#is_advisor)
		- [is\_ai](#is_ai)
		- [is\_air\_chief](#is_air_chief)
		- [is\_ally\_with](#is_ally_with)
		- [is\_amphibious\_invasion](#is_amphibious_invasion)
		- [is\_army\_chief](#is_army_chief)
		- [is\_army\_leader](#is_army_leader)
		- [is\_assigned](#is_assigned)
		- [is\_attacker](#is_attacker)
		- [is\_border\_conflict](#is_border_conflict)
		- [is\_border\_war](#is_border_war)
		- [is\_capital](#is_capital)
		- [is\_character](#is_character)
		- [is\_character\_slot](#is_character_slot)
		- [is\_claimed\_by](#is_claimed_by)
		- [is\_coastal](#is_coastal)
		- [is\_controlled\_by](#is_controlled_by)
		- [is\_core\_of](#is_core_of)
		- [is\_corps\_commander](#is_corps_commander)
		- [is\_country\_leader](#is_country_leader)
		- [is\_cryptology\_department\_active](#is_cryptology_department_active)
		- [is\_debug](#is_debug)
		- [is\_decrypting](#is_decrypting)
		- [is\_defender](#is_defender)
		- [is\_demilitarized\_zone](#is_demilitarized_zone)
		- [is\_dynamic\_country](#is_dynamic_country)
		- [is\_exile\_host](#is_exile_host)
		- [is\_exiled\_in](#is_exiled_in)
		- [is\_exiled\_leader](#is_exiled_leader)
		- [is\_exiled\_leader\_from](#is_exiled_leader_from)
		- [is\_faction\_leader](#is_faction_leader)
		- [is\_female](#is_female)
		- [is\_field\_marshal](#is_field_marshal)
		- [is\_fighting\_air\_units](#is_fighting_air_units)
		- [is\_fighting\_in\_terrain](#is_fighting_in_terrain)
		- [is\_fighting\_in\_weather](#is_fighting_in_weather)
		- [is\_fully\_controlled\_by](#is_fully_controlled_by)
		- [is\_fully\_decrypted](#is_fully_decrypted)
		- [is\_government\_in\_exile](#is_government_in_exile)
		- [is\_guaranteed\_by](#is_guaranteed_by)
		- [is\_high\_command](#is_high_command)
		- [is\_historical\_focus\_on](#is_historical_focus_on)
		- [is\_hosting\_exile](#is_hosting_exile)
		- [is\_in\_array](#is_in_array)
		- [is\_in\_faction](#is_in_faction)
		- [is\_in\_faction\_with](#is_in_faction_with)
		- [is\_in\_home\_area](#is_in_home_area)
		- [is\_in\_peace\_conference](#is_in_peace_conference)
		- [is\_in\_tech\_sharing\_group](#is_in_tech_sharing_group)
		- [is\_ironman](#is_ironman)
		- [is\_island\_state](#is_island_state)
		- [is\_justifying\_wargoal\_against](#is_justifying_wargoal_against)
		- [is\_leading\_army](#is_leading_army)
		- [is\_leading\_army\_group](#is_leading_army_group)
		- [is\_leading\_volunteer\_group](#is_leading_volunteer_group)
		- [is\_leading\_volunteer\_group\_with\_original\_country](#is_leading_volunteer_group_with_original_country)
		- [is\_lend\_leasing](#is_lend_leasing)
		- [is\_licensing\_any\_to](#is_licensing_any_to)
		- [is\_licensing\_to](#is_licensing_to)
		- [is\_major](#is_major)
		- [is\_navy\_chief](#is_navy_chief)
		- [is\_navy\_leader](#is_navy_leader)
		- [is\_neighbor\_of](#is_neighbor_of)
		- [is\_on\_continent](#is_on_continent)
		- [is\_operation\_type](#is_operation_type)
		- [is\_operative](#is_operative)
		- [is\_operative\_captured](#is_operative_captured)
		- [is\_owned\_and\_controlled\_by](#is_owned_and_controlled_by)
		- [is\_owned\_by](#is_owned_by)
		- [is\_owner\_neighbor\_of](#is_owner_neighbor_of)
		- [is\_political\_advisor](#is_political_advisor)
		- [is\_preparing\_operation](#is_preparing_operation)
		- [is\_puppet](#is_puppet)
		- [is\_puppet\_of](#is_puppet_of)
		- [is\_researching\_technology](#is_researching_technology)
		- [is\_running\_operation](#is_running_operation)
		- [is\_spymaster](#is_spymaster)
		- [is\_staging\_coup](#is_staging_coup)
		- [is\_subject](#is_subject)
		- [is\_subject\_of](#is_subject_of)
		- [is\_target\_of\_coup](#is_target_of_coup)
		- [is\_theorist](#is_theorist)
		- [is\_tutorial](#is_tutorial)
		- [is\_unit\_leader](#is_unit_leader)
		- [is\_winning](#is_winning)
		- [land\_doctrine\_level](#land_doctrine_level)
		- [less\_combat\_width\_than\_opponent](#less_combat_width_than_opponent)
		- [log](#log)
		- [logistics\_skill\_level](#logistics_skill_level)
		- [manpower\_per\_military\_factory](#manpower_per_military_factory)
		- [meta\_trigger](#meta_trigger)
		- [min\_planning](#min_planning)
		- [mine\_threat](#mine_threat)
		- [modulo\_temp\_variable](#modulo_temp_variable)
		- [multiply\_temp\_variable](#multiply_temp_variable)
		- [naval\_strength\_comparison](#naval_strength_comparison)
		- [naval\_strength\_ratio](#naval_strength_ratio)
		- [network\_national\_coverage](#network_national_coverage)
		- [network\_strength](#network_strength)
		- [night](#night)
		- [non\_damaged\_building\_level](#non_damaged_building_level)
		- [not](#not)
		- [not\_already\_hired\_except\_as](#not_already_hired_except_as)
		- [num\_claimed\_peace\_conference\_neighbour\_states](#num_claimed_peace_conference_neighbour_states)
		- [num\_divisions](#num_divisions)
		- [num\_faction\_members](#num_faction_members)
		- [num\_fake\_intel\_divisions](#num_fake_intel_divisions)
		- [num\_finished\_operations](#num_finished_operations)
		- [num\_free\_operative\_slots](#num_free_operative_slots)
		- [num\_occupied\_states](#num_occupied_states)
		- [num\_of\_available\_civilian\_factories](#num_of_available_civilian_factories)
		- [num\_of\_available\_military\_factories](#num_of_available_military_factories)
		- [num\_of\_available\_naval\_factories](#num_of_available_naval_factories)
		- [num\_of\_civilian\_factories](#num_of_civilian_factories)
		- [num\_of\_civilian\_factories\_available\_for\_projects](#num_of_civilian_factories_available_for_projects)
		- [num\_of\_controlled\_factories](#num_of_controlled_factories)
		- [num\_of\_controlled\_states](#num_of_controlled_states)
		- [num\_of\_factories](#num_of_factories)
		- [num\_of\_military\_factories](#num_of_military_factories)
		- [num\_of\_naval\_factories](#num_of_naval_factories)
		- [num\_of\_nukes](#num_of_nukes)
		- [num\_of\_operatives](#num_of_operatives)
		- [num\_of\_owned\_factories](#num_of_owned_factories)
		- [num\_of\_supply\_nodes](#num_of_supply_nodes)
		- [num\_operative\_slots](#num_operative_slots)
		- [num\_owned\_neighbour\_states](#num_owned_neighbour_states)
		- [num\_researched\_technologies](#num_researched_technologies)
		- [num\_subjects](#num_subjects)
		- [num\_tech\_sharing\_groups](#num_tech_sharing_groups)
		- [num\_units](#num_units)
		- [occupation\_law](#occupation_law)
		- [occupied\_country\_tag](#occupied_country_tag)
		- [operative\_leader\_mission](#operative_leader_mission)
		- [operative\_leader\_operation](#operative_leader_operation)
		- [or](#or)
		- [original\_research\_slots](#original_research_slots)
		- [original\_tag](#original_tag)
		- [owns\_state](#owns_state)
		- [phase](#phase)
		- [planning\_skill\_level](#planning_skill_level)
		- [political\_power\_daily](#political_power_daily)
		- [political\_power\_growth](#political_power_growth)
		- [print\_variables](#print_variables)
		- [received\_expeditionary\_forces](#received_expeditionary_forces)
		- [recon\_advantage](#recon_advantage)
		- [region](#region)
		- [remove\_from\_temp\_array](#remove_from_temp_array)
		- [reserves](#reserves)
		- [resistance](#resistance)
		- [resistance\_speed](#resistance_speed)
		- [resistance\_target](#resistance_target)
		- [resize\_temp\_array](#resize_temp_array)
		- [round\_temp\_variable](#round_temp_variable)
		- [set\_temp\_variable](#set_temp_variable)
		- [set\_temp\_variable\_to\_random](#set_temp_variable_to_random)
		- [ships\_in\_area](#ships_in_area)
		- [ships\_in\_state\_ports](#ships_in_state_ports)
		- [skill](#skill)
		- [skill\_advantage](#skill_advantage)
		- [state](#state)
		- [state\_and\_terrain\_strategic\_value](#state_and_terrain_strategic_value)
		- [state\_population](#state_population)
		- [state\_population\_k](#state_population_k)
		- [state\_strategic\_value](#state_strategic_value)
		- [stockpile\_ratio](#stockpile_ratio)
		- [strength\_ratio](#strength_ratio)
		- [subtract\_from\_temp\_variable](#subtract_from_temp_variable)
		- [surrender\_progress](#surrender_progress)
		- [tag](#tag)
		- [target\_conscription\_amount](#target_conscription_amount)
		- [temperature](#temperature)
		- [threat](#threat)

## Triggers for scope OPERATION

* [all_operative_leader](#all_operative_leader)
* [any_operative_leader](#any_operative_leader)
* [hidden_trigger](#hidden_trigger)
* [is_operation_type](#is_operation_type)
* [meta_trigger](#meta_trigger)

## Triggers for scope STATE

* [all_neighbor_state](#all_neighbor_state)
* [any_neighbor_state](#any_neighbor_state)
* [any_province_building_level](#any_province_building_level)
* [area](#area)
* [compliance](#compliance)
* [compliance_speed](#compliance_speed)
* [days_since_last_strategic_bombing](#days_since_last_strategic_bombing)
* [distance_to](#distance_to)
* [free_building_slots](#free_building_slots)
* [has_active_resistance](#has_active_resistance)
* [has_border_war](#has_border_war)
* [has_border_war_with](#has_border_war_with)
* [has_claimed_state_in_peace_conference](#has_claimed_state_in_peace_conference)
* [has_dynamic_modifier](#has_dynamic_modifier)
* [has_occupation_modifier](#has_occupation_modifier)
* [has_resistance](#has_resistance)
* [has_resources_amount](#has_resources_amount)
* [has_state_category](#has_state_category)
* [has_state_flag](#has_state_flag)
* [hidden_trigger](#hidden_trigger)
* [impassable](#impassable)
* [is_border_conflict](#is_border_conflict)
* [is_capital](#is_capital)
* [is_claimed_by](#is_claimed_by)
* [is_coastal](#is_coastal)
* [is_controlled_by](#is_controlled_by)
* [is_core_of](#is_core_of)
* [is_demilitarized_zone](#is_demilitarized_zone)
* [is_fully_controlled_by](#is_fully_controlled_by)
* [is_in_home_area](#is_in_home_area)
* [is_island_state](#is_island_state)
* [is_on_continent](#is_on_continent)
* [is_owned_and_controlled_by](#is_owned_and_controlled_by)
* [is_owned_by](#is_owned_by)
* [meta_trigger](#meta_trigger)
* [non_damaged_building_level](#non_damaged_building_level)
* [num_claimed_peace_conference_neighbour_states](#num_claimed_peace_conference_neighbour_states)
* [num_owned_neighbour_states](#num_owned_neighbour_states)
* [occupation_law](#occupation_law)
* [occupied_country_tag](#occupied_country_tag)
* [region](#region)
* [resistance](#resistance)
* [resistance_speed](#resistance_speed)
* [resistance_target](#resistance_target)
* [state](#state)
* [state_and_terrain_strategic_value](#state_and_terrain_strategic_value)
* [state_population](#state_population)
* [state_population_k](#state_population_k)
* [state_strategic_value](#state_strategic_value)

## Triggers for scope STRATEGIC_REGION

* [hidden_trigger](#hidden_trigger)
* [meta_trigger](#meta_trigger)

## Triggers for scope any

* [add_to_temp_array](#add_to_temp_array)
* [add_to_temp_variable](#add_to_temp_variable)
* [all_country](#all_country)
* [all_country_with_original_tag](#all_country_with_original_tag)
* [all_of](#all_of)
* [all_of_scopes](#all_of_scopes)
* [all_other_country](#all_other_country)
* [all_state](#all_state)
* [always](#always)
* [and](#and)
* [any_country](#any_country)
* [any_country_with_original_tag](#any_country_with_original_tag)
* [any_of](#any_of)
* [any_of_scopes](#any_of_scopes)
* [any_other_country](#any_other_country)
* [any_state](#any_state)
* [can_build_railway](#can_build_railway)
* [check_variable](#check_variable)
* [clamp_temp_variable](#clamp_temp_variable)
* [clear_temp_array](#clear_temp_array)
* [count_triggers](#count_triggers)
* [country_exists](#country_exists)
* [custom_trigger_tooltip](#custom_trigger_tooltip)
* [date](#date)
* [difficulty](#difficulty)
* [divide_temp_variable](#divide_temp_variable)
* [find_highest_in_array](#find_highest_in_array)
* [find_lowest_in_array](#find_lowest_in_array)
* [game_rules_allow_achievements](#game_rules_allow_achievements)
* [has_any_custom_difficulty_setting](#has_any_custom_difficulty_setting)
* [has_border_war_between](#has_border_war_between)
* [has_custom_difficulty_setting](#has_custom_difficulty_setting)
* [has_dlc](#has_dlc)
* [has_event_target](#has_event_target)
* [has_game_rule](#has_game_rule)
* [has_global_flag](#has_global_flag)
* [has_railway_connection](#has_railway_connection)
* [has_railway_level](#has_railway_level)
* [has_rule](#has_rule)
* [has_start_date](#has_start_date)
* [has_variable](#has_variable)
* [if](#if)
* [is_debug](#is_debug)
* [is_historical_focus_on](#is_historical_focus_on)
* [is_in_array](#is_in_array)
* [is_ironman](#is_ironman)
* [is_tutorial](#is_tutorial)
* [log](#log)
* [modulo_temp_variable](#modulo_temp_variable)
* [multiply_temp_variable](#multiply_temp_variable)
* [not](#not)
* [or](#or)
* [print_variables](#print_variables)
* [remove_from_temp_array](#remove_from_temp_array)
* [resize_temp_array](#resize_temp_array)
* [round_temp_variable](#round_temp_variable)
* [set_temp_variable](#set_temp_variable)
* [set_temp_variable_to_random](#set_temp_variable_to_random)
* [subtract_from_temp_variable](#subtract_from_temp_variable)
* [threat](#threat)

## All Triggers

### add_to_temp_array

* Supported Scopes: any
* Supported Targets: none

```
Adds an element to a temporary array
Example: add_to_temp_array = {
	array = array_name
	value = 42 #optional, if not defined adds scope
	index = 3 #optional, default is end. otherwise elements are shifted
}
#shorter usage: add_to_temp_array = { array_name = 42 }
```

### add_to_temp_variable

* Supported Scopes: any
* Supported Targets: none

```
Adds a value or a variable to a temporary variable
Example: add_to_temp_variable = {
var = num_dogs
	value = 42
	tooltip = loc_str_id_with_LEFT_and_RIGHT  #localized text with LEFT and RIGHT tokens in it, tokens will replaced by values. _NOT is added to end for negative trigger
}
```

### agency_upgrade_number

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks the number of upgrade done in the intelligence agency. 
agency_upgrade_number > 4
```

### ai_has_role_division

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if the ai controlled country has any fielded divisions for a specific role
```

### ai_has_role_template

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if the ai controlled country has any template for a specific role
```

### ai_irrationality

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check the ai irrationality value
```

### ai_liberate_desire

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check what liberation desire the country has towards a specified country
```

### ai_wants_divisions

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Will compare towards the amount of divisions an ai wants to have.
```

### all_allied_country

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Check if all allied countries meet the trigger. Does not include the country itself. tooltip=key can be defined to override title
```

### all_army_leader

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if all unit leaders meets the trigger. tooltip=key can be defined to override title
```

### all_character

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if all characters meets the trigger. tooltip=key can be defined to override title
```

### all_controlled_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if all of the states controlled by the scope country meets the trigger. tooltip=key can be defined to override title
```

### all_core_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Check if all of the country core states for the scope meets the trigger. tooltip=key can be defined to override title
```

### all_country

* Supported Scopes: any
* Supported Targets: none

```
check if all countries meets the trigger. tooltip=key can be defined to override title
```

### all_country_with_original_tag

* Supported Scopes: any
* Supported Targets: none

```
check if all country with current scope's original tag meets the trigger. Example:
all_country_with_original_tag = { 
  original_tag_to_check = ENG # the trigger check all countries that has this original tag 
  # ... triggers to check 
}
```

### all_enemy_country

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if all enemy countries meet the trigger. tooltip=key can be defined to override title
```

### all_guaranteed_country

* Supported Scopes: COUNTRY
* Supported Targets: THIS

```
check if every country with current scoped country guarantees. Example:
all_country_with_original_tag = { 
  # ... triggers to check 
}
```

### all_navy_leader

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if all unit leaders meets the trigger. tooltip=key can be defined to override title
```

### all_neighbor_country

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if all neighbor countries meet the trigger. tooltip=key can be defined to override title
```

### all_neighbor_state

* Supported Scopes: STATE
* Supported Targets: none

```
check if all neighbor states meets the trigger. tooltip=key can be defined to override title
```

### all_occupied_country

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if all occupied countries meets the trigger. tooltip=key can be defined to override title
```

### all_of

* Supported Scopes: any
* Supported Targets: any

```
Runs a loop on an array and check a trigger for each value, if any false returns false. otherwise returns true
Example: all_of = {
	array = array_name
	value = value_name #optional (default 'v') current value in array will be stored in this temp variable
	index = index_name #optional (default 'i') current index in array will be stored in this temp variable
 #trigger 1
 #trigger 2 ...
}
```

### all_of_scopes

* Supported Scopes: any
* Supported Targets: any

```
Runs a loop on an array and check a trigger for each scope in it, if any false returns false. otherwise returns true
Example: all_of_scopes = {
	array = array_name
	tooltip = loc #if defined the trigger will output tooltip using this title. loc_NOT will be used if trigger is inside a NOT
 #trigger 1
 #trigger 2 ...
}
```

### all_operative_leader

* Supported Scopes: COUNTRY, OPERATION
* Supported Targets: none

```
check if all operatives meets the trigger. tooltip=key can be defined to override title
```

### all_other_country

* Supported Scopes: any
* Supported Targets: none

```
check if all other countries meets the trigger. Excludes current country. tooltip=key can be defined to override title
```

### all_owned_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if all owned states meets the trigger. tooltip=key can be defined to override title
```

### all_state

* Supported Scopes: any
* Supported Targets: none

```
check if all states meets the trigger. tooltip=key can be defined to override title
```

### all_subject_countries

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if all subject countries meet the trigger. tooltip=key can be defined to override title
```

### all_unit_leader

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if all unit leaders meets the trigger. tooltip=key can be defined to override title
```

### alliance_naval_strength_ratio

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Compares the estimated naval strength between the scope country, his allies and his enemies.
```

### alliance_strength_ratio

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Compares the estimated army strength between the scope country, his allies and his enemies.
```

### always

* Supported Scopes: any
* Supported Targets: any

```
always returns specified value
```

### amount_manpower_in_deployment_queue

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks for amount manpower currently in deploymentview. amount_manpower_in_training > 10
```

### amount_research_slots

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check number of research current research slots 
 amount_research_slots > 2
```

### amount_taken_ideas

* Supported Scopes: COUNTRY
* Supported Targets: none

```
has current country picked specified amount of ideas. Category and slot is optional.
Excludes national_spirit, hidden, law = yes
amount_taken_ideas = {
	amount < <int> (mandatory)
	category = { military_staff } (optional)
	slot = { army_chief political_advisor } (optional)
}
```

### and

* Supported Scopes: any
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
all inside trigger must be true
```

### any_allied_country

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Check if any allied country meets the trigger. Does not include the country itself. tooltip=key can be defined to override title
```

### any_army_leader

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any unit leader meets the trigger. tooltip=key can be defined to override title
```

### any_character

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any character meets the trigger. tooltip=key can be defined to override title
```

### any_claim

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if there is a claim between a country and all others
```

### any_controlled_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any of the states controlled by the scope country meets the trigger. tooltip=key can be defined to override title
```

### any_core_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Check if any of the country core states for scope meets the trigger. tooltip=key can be defined to override title
```

### any_country

* Supported Scopes: any
* Supported Targets: none

```
check if any country meets the trigger
```

### any_country_with_original_tag

* Supported Scopes: any
* Supported Targets: none

```
check if any country with current scope's original tag meets the trigger. Example:
any_country_with_original_tag = { 
  original_tag_to_check = ENG # the trigger check all countries that has this original tag 
  # ... triggers to check 
}
```

### any_enemy_country

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any enemy country meets the trigger. tooltip=key can be defined to override title
```

### any_guaranteed_country

* Supported Scopes: COUNTRY
* Supported Targets: THIS

```
check if any country with current scoped country guarantees. Example:
any_guaranteed_country = { 
  # ... triggers to check 
}
```

### any_home_area_neighbor_country

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any neighbor country in the home area meets the trigger. tooltip=key can be defined to override title
```

### any_navy_leader

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any unit leader meets the trigger. tooltip=key can be defined to override title
```

### any_neighbor_country

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any neighbor country meets the trigger. tooltip=key can be defined to override title
```

### any_neighbor_state

* Supported Scopes: STATE
* Supported Targets: none

```
check if any neighbor state meets the trigger. tooltip=key can be defined to override title
```

### any_occupied_country

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any any occupied meets the trigger. tooltip=key can be defined to override title
```

### any_of

* Supported Scopes: any
* Supported Targets: any

```
Runs a loop on an array and check a trigger for each value, if any true returns true. otherwise returns false
Example: any_of = {
	array = array_name
	value = value_name #optional (default 'value') current value in array will be stored in this temp variable
	index = index_name #optional (default 'index') current index in array will be stored in this temp variable
 #trigger 1
 #trigger 2 ...
}
```

### any_of_scopes

* Supported Scopes: any
* Supported Targets: any

```
Runs a loop on an array and check a trigger for each scope in it, if any true returns true. otherwise returns false
Example: any_of_scopes = {
	array = array_name
	tooltip = loc #if defined the trigger will output tooltip using this title. loc_NOT will be used if trigger is inside a NOT
 #trigger 1
 #trigger 2 ...
}
```

### any_operative_leader

* Supported Scopes: COUNTRY, OPERATION
* Supported Targets: none

```
check if any operatives meets the trigger. tooltip=key can be defined to override title
```

### any_other_country

* Supported Scopes: any
* Supported Targets: none

```
check if any other country meets the trigger. Excludes current country. tooltip=key can be defined to override title
```

### any_owned_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any owned state meets the trigger. tooltip=key can be defined to override title
```

### any_province_building_level

* Supported Scopes: STATE
* Supported Targets: any

```
In the current state, checks if any province within the specified limit has a building of the specified level.
```

### any_state

* Supported Scopes: any
* Supported Targets: none

```
check if any state meets the trigger. tooltip=key can be defined to override title
```

### any_subject_country

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any subject country meets the trigger. tooltip=key can be defined to override title
```

### any_unit_leader

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if any unit leader meets the trigger. tooltip=key can be defined to override title
```

### any_war_score

* Supported Scopes: COUNTRY
* Supported Targets: none

```
compares the warscore of all wars in a country to see if any fullfills the comparison condition 0-100 - Example: any_war_score > 40
```

### area

* Supported Scopes: STATE
* Supported Targets: none

```
check state's strategic area id
```

### armor

* Supported Scopes: COMBATANT
* Supported Targets: none

```
Check that average armor level of combatant is over a certain level
```

### army_manpower_in_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks for amount manpower currently the target state with option to specify a type.
Example:
army_manpower_in_state = {
	state = <id> (variables supported)
	amount < <int> (variables supported)
	type > <equipment_type> (armor, infantry, etc.)
```

### attack_skill_level

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: none

```
Compares attack skill level of a unit leader.
Example: attack_skill_level > 5
```

### average_stats

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: none

```
Compares the average stats for a unit leader.
Example: average_stats > 10
```

### can_be_country_leader

* Supported Scopes: COUNTRY, CHARACTER
* Supported Targets: none

```
Returns true if specified character can be country leader.

Example:
can_be_country_leader = GER_erwin_rommelcan_be_country_leader = yes
```

### can_build_railway

* Supported Scopes: any
* Supported Targets: any

```
Checks if a railway can be built according to specifications. Example:
can_build_railway = {
  build_only_on_allied = yes # No by default. If yes and the effect scope is country, it will only build on allied territories for the country

  # You can specify a weight function that will be used in pathing. The scope will be the controller of the province it is trying to path to.
  # A negative value will make it not to path to that controller.
  # Non-negative values will be used as a path cost for that province.
  controller_priority = {
    base = 1

    modifier = {
      tag = MAN
      add = 2
    }
  }

  # The following options are used for picking a path. You can specify multiple options and it will pick in following order:
  fallback = yes # Default no. If yes, each option will try to fallback to next one.
  # option 1: List of provinces to draw railways. If fallback = yes uses start and end provinces of the path as fallback in option 2.
  path = { 10 20 30 40 }
  # option 2: Specify start & end province IDs. It will pick the shortest path. If provinces are not valid and if fallback = yes it will use states of those provs and use in option 3.
  start_province = 42
  target_province = 84
  # option 3: Specify start & end state IDs. It will pick provinces with the best node (capital > nodes > naval )
  start_state = 50
  target_state = 100
}

```

### can_declare_war_on

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
checks if the country could potentially declare a war on the target ( according to game rules, relationship, etc... ). Example can_declare_war_on = GER
```

### can_research

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country can research technology
```

### can_select_trait

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: none

```
check if leader can select a trait
```

### casualties

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Check the amount of casualties a country has suffered in all of it's wars
```

### casualties_inflicted_by

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks the casualties infliced by the speficied country to the scopped country.
E.g. true if Germany has been inflicted more than 200k casualties by Poland:
GER = {
  casualties_inflicted_by = {
    opponent = POL
    thousands > 200
  }
}
```

### casualties_k

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Check the amount of casualties in thousands a country has suffered in all of it's wars
```

### check_variable

* Supported Scopes: any
* Supported Targets: any

```
Compares a variable to a number
```

### civilwar_target

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
civilwar target is ( for civil wars checks )
```

### clamp_temp_variable

* Supported Scopes: any
* Supported Targets: none

```
clamps a temp variable between two values/variables
```

### clear_temp_array

* Supported Scopes: any
* Supported Targets: none

```
Clears the contents of a temporary array
Example: clear_temp_array = array_name
```

### command_power

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if available command power is more or less that specified value 
 command_power > 1.5
```

### command_power_daily

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if daily command power increase is more or less that specified value 
 command_power_daily > 1.5
```

### compare_autonomy_progress_ratio

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if autonomy progress ratio is higher than value, example:
compare_autonomy_progress_ratio > 0.5
```

### compare_autonomy_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if autonomy state is higher than other one, example:
compare_autonomy_state > puppet
```

### compare_intel_with

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compare the intel of the scoped country with the specified one:
GER = {
  # is true if all predicates are satisfied
  compare_intel_with = { 
    target = POL
    civilian_intel > 0.5  # GER has at least 0.5 more civ. intel than POL
    army_intel = 0  # GER has as much army intel as POL
    navy_intel < 0  # POL has more navy intel than GER
    # airforce_intel is not specified and thus ignored in the comparison
  }
}

```

### compliance

* Supported Scopes: STATE
* Supported Targets: any

```
Compares the current compliance level of a state to a value. Example: compliance > 50 
```

### compliance_speed

* Supported Scopes: STATE
* Supported Targets: any

```
Compares the current compliance speed of a state to a value. Example: compliance_speed > 50 
```

### conscription_ratio

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks  conscription ratio of the country compared to target conscription ratio.

```

### controls_province

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check controller for province
```

### controls_state

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, CAPITAL

```
check controller for state(s)
```

### convoy_threat

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
A trigger to check convoy threat for a country. Controlled by NAVAL_CONVOY_DANGER defines. Returns a value between 0 and 1. Example convoy_threat > 0.5 
```

### core_compliance

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Compares the core (average of all occupied states) compliance value of occupied_country_tag that is occuppied by the country in current scope.
Example: 
core_compliance = { 
 occupied_country_tag = ITA 
 value > 35 
}
```

### core_resistance

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Compares the core (average of all occupied states) resistance value of occupied_country_tag that is occuppied by the country in current scope.
Example:
core_resistance = { 
 occupied_country_tag = ITA 
 value > 35 
}
```

### count_triggers

* Supported Scopes: any
* Supported Targets: none

```
Returns true if the specified number of sub-triggers return true
count_triggers = { amount = 2 <trigger> <trigger> <trigger> }
```

### country_exists

* Supported Scopes: any
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if the specified country exist
```

### current_conscription_amount

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks the current conscription amount of the country.

```

### custom_trigger_tooltip

* Supported Scopes: any
* Supported Targets: none

```
Works as an and-trigger with a custom tooltip. will check if KEY_NOT first if it is inside NOT = { }
```

### date

* Supported Scopes: any
* Supported Targets: none

```
checks for a specific date
```

### days_since_capitulated

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks the number of days since the country last capitulated, even if it is no longer capitulated.
	If it has not ever capitulated, the value is extremely large.
	It is recommended to combine this with has_capitulated = yes when you specifically want to ignore non-active capitulations.
Examples:
	HOL = { has_capitulated = yes days_since_capitulated > 60 } # The Netherlands has been capitulated for more than two months
	FRA = { has_capitulated = yes days_since_capitulated < 21 } # France has capitulated sometime within the past three weeks
	GER = { OR = { has_capitulated = no days_since_capitulated > 14 } } # Germany is not both actively and recently capitulated

```

### days_since_last_strategic_bombing

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks the days since last strategic bombing.
days_since_last_strategic_bombing < 10

```

### decryption_progress

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks decryption ratio against a country. Example: 
decryption_progress = { 
 target = GER
 value > 0.5
} 
#or decryption_progress@GER as variable

```

### defense_skill_level

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: none

```
Compares defense skill level of a unit leader.
Example: defense_skill_level > 5
```

### difficulty

* Supported Scopes: any
* Supported Targets: none

```
check if the difficulty is above or below specified value 0-2 (difficulty enum). Example: difficulty > 0 (above easy)
```

### dig_in

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if we have digin level (lowest)
```

### distance_to

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check distance between two states
```

### divide_temp_variable

* Supported Scopes: any
* Supported Targets: none

```
Divies a temporary variable by a value or another variable
Example: divide_temp_variable = {
var = num_dogs
	value = 42
	tooltip = loc_str_id_with_LEFT_and_RIGHT  #localized text with LEFT and RIGHT tokens in it, tokens will replaced by values. _NOT is added to end for negative trigger
}
```

### divisions_in_border_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks for amount of divisions in specified state owned by current country.
```

### divisions_in_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks for amount of divisions in specified state owned by current country.
```

### enemies_naval_strength_ratio

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares the estimated navy strength between the scope country and all its enemies
```

### enemies_strength_ratio

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares the estimated army strength between the scope country and all its enemies
```

### estimated_intel_max_armor

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares estimated max armor based on intel. Example: estimated_intel_max_armor = { tag = ITA value > 1 }
```

### estimated_intel_max_piercing

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares estimated max armor based on intel. Example: estimated_intel_max_piercing = { tag = ITA value > 1 }
```

### exists

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Check if the current country exist. The country of the scope you are in. Example: DEN = { exists = yes }
```

### fastest_unit

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if fastest unit of combatant is over this limit
```

### find_highest_in_array

* Supported Scopes: any
* Supported Targets: any

```
Runs a loop on for each element of an array, finds the highest value and stores result in temp variables
Example: find_highest_in_array = {
	array = array_name
	value = value_name #optional (default 'v') highest value in array will be stored in this temp variable
	index = index_name #optional (default 'i') index of highest value in array will be stored in this temp variable
}
```

### find_lowest_in_array

* Supported Scopes: any
* Supported Targets: any

```
Runs a loop on for each element of an array, finds the lowest value and stores result in temp variables
Example: find_lowest_in_array = {
	array = array_name
	value = value_name #optional (default 'v') lowest value in array will be stored in this temp variable
	index = index_name #optional (default 'i') index of lowest value in array will be stored in this temp variable
}
```

### focus_progress

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks focus progress example:
 focus_progress = { focus = id progress > 0.5 }
```

### foreign_manpower

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check the amount of foreign garrison manpower we have
```

### free_building_slots

* Supported Scopes: STATE
* Supported Targets: none

```
checks building for available construction levels 
free_building_slots = { 
	building = building_type 
	size > 5 
	include_locked = yes 
	province = 42 #will check province buildings if specified 
}
```

### frontage_full

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if sides front is full or can get more reinforcements
```

### fuel_ratio

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares the fuel ratio to a variable.
Example: fuel_ratio > 0.5
```

### game_rules_allow_achievements

* Supported Scopes: any
* Supported Targets: none

```
Returns true if all of the active game rule options allow achievements.
```

### garrison_manpower_need

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check the amount of manpower needed by garrisons
```

### get_highest_scored_country_temp

* Supported Scopes: COUNTRY
* Supported Targets: none

```
calculates the highest scored country that is defined in a country scorer and sets it to a variable. Example: 
get_highest_scored_country_temp = { 
  scorer = scorer_id 
  var = var_name # variable name that the result will be stored. default is highest_scored_country 
}
```

### get_sorted_scored_countries_temp

* Supported Scopes: COUNTRY
* Supported Targets: none

```
calculates & sorts all countries in a country scorer and stores them and their scores in temp arrays. Example: 
get_sorted_scored_countries_temp = { 
  scorer = scorer_id # id that is used in country scorer  array = array_name # a name to store sorted countries as a temp array (default to sorted_country_list) 
  scores = array_name # corresponding score temp array for countries stored in array (default to country_list_scores) 
}
```

### gives_military_access_to

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if country gives military access to specified country
```

### hardness

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check lowest/highest hardness level on combatant
```

### has_ability

* Supported Scopes: CHARACTER
* Supported Targets: any

```
does unit leader have the abilityCheck if a unit leader has the ability.
Example: has_ability = force_attack
```

### has_active_mission

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has an active mission with specified ID. has_active_mission = my_test_mission
```

### has_active_resistance

* Supported Scopes: STATE
* Supported Targets: any

```
returns true if state has an active resistance (above zero)
```

### has_added_tension_amount

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Compare if the country has added above or below the specified ammount of tension
```

### has_air_experience

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Compares current country's air experience with right side value.
 has_air_experience < <value>
```

### has_air_ledger

* Supported Scopes: CHARACTER
* Supported Targets: none

```
has_air_ledger = yes/no - Checks if the current character has an air ledger
```

### has_allowed_idea_with_traits

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if country has allowed ideas with specific traits more than limit. Example: 
has_available_idea_with_traits = { 
	idea = head_of_intelligence # trait names. can be a list of traits in { } 
	limit = 1 
	characters = yes/no - only runs this trigger on characters 
	ignore = generic_head_of_intelligence # if specified, these ideas will be ignored. can be a list of ideas in { }
} 

```

### has_annex_war_goal

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks a country has annex war goal on another country
```

### has_any_custom_difficulty_setting

* Supported Scopes: any
* Supported Targets: any

```
Returns true if the game has any custom difficulty on
```

### has_any_license

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Country has any active licenses
Example: has_any_license = yes
```

### has_army_experience

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Compares current country's army experience with right side value.
 has_army_experience < <value>
```

### has_army_ledger

* Supported Scopes: CHARACTER
* Supported Targets: none

```
has_army_ledger = yes/no - Checks if the current character has an army ledger
```

### has_army_manpower

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks for amount of manpower of selected type, additionally of a specified type
```

### has_army_size

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks for amount of divisions, additionally of a specified type
```

### has_attache

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Has attachÃ© from any other country
```

### has_attache_from

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Has attachÃ© from specified country
```

### has_autonomy_state

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country currently has an autonomy state, example:
has_autonomy_state = puppet
```

### has_available_idea_with_traits

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if country has available ideas with specific traits more than limit. Example: 
has_available_idea_with_traits = { 
	idea = head_of_intelligence # trait names. can be a list of traits in { } 
	limit = 1 
	characters = yes/no - only runs this trigger on characters 
	ignore = generic_head_of_intelligence # if specified, these ideas will be ignored. can be a list of ideas in { }
} 

```

### has_border_war

* Supported Scopes: STATE, COUNTRY
* Supported Targets: any

```
Checks if a there is any border wars for country/state
```

### has_border_war_between

* Supported Scopes: any
* Supported Targets: any

```
Checks if a there is a border war between two states
```

### has_border_war_with

* Supported Scopes: STATE, COUNTRY
* Supported Targets: any

```
Checks if a there is a border against a state/country
```

### has_built

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks country has built a set number (at least) of a certain type of building since taking goal 
has_built = { 
  type = building_type 
  value = 42 
}
```

### has_capitulated

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks if the country has capitulated
```

### has_captured_operative

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if a country has a captured an operative ( supports scoped variables )
has_captured_operative = GER/yes/no

```

### has_carrier_airwings_in_own_combat

* Supported Scopes: COMBATANT
* Supported Targets: none

```
Check if carrier has airplanes that are part of the current combat
```

### has_carrier_airwings_on_mission

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if side has a career with air wings on a mission
```

### has_cavalry_ratio

* Supported Scopes: COMBATANT
* Supported Targets: none

```
Check that ratio of cavalry brigades in the composition of a side of combating troops are over a certain level
```

### has_character

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Returns true if scoped country has character.

Example:
has_character = GER_erwin_rommel
```

### has_character_flag

* Supported Scopes: CHARACTER
* Supported Targets: any

```
has a character flag been setCheck flag val date set and days since set.
Example: has_unit_leader_flag = test_flag
has_character_flag = { 
	flag = <name> (mandatory)
	value < <int> (optional)
	date > <date> (optional)
	days > <int> (optional)
}
```

### has_civil_war

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if participant in civil war as revolter or target
```

### has_claimed_state_in_peace_conference

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if a state has been claimed by target country in an ongoing peace conference
```

### has_collaboration

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks the collaboration in a target country with our currently scoped country. Example: 
has_collaboration = { 
 target = GER
 value > 0.5
} 
#or has_collaboration@GER as variable

```

### has_combat_modifier

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if combatant has modifier
```

### has_completed_focus

* Supported Scopes: COUNTRY
* Supported Targets: none

```
has country completed focus
```

### has_core_occupation_modifier

* Supported Scopes: COUNTRY
* Supported Targets: any

```
has an occupation modifier that applies to average resistance/compliance
Example: 
has_core_occupation_modifier = { 
 occupied_country_tag = ITA 
 modifier = token 
}
```

### has_cosmetic_tag

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if country has specific cosmetic tag set.
Example: INS = { has_cosmetic_tag = INS1 }
```

### has_country_custom_difficulty_setting

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Returns true if the game has any custom difficulty on the scope nation
```

### has_country_flag

* Supported Scopes: COUNTRY
* Supported Targets: any

```
has country flag been set.Check flag val date set and days since set.
Example: has_country_flag = test_flag
has_country_flag = { 
	flag = <name> (mandatory)
	value < <int> (optional)
	date > <date> (optional)
	days > <int> (optional)
}
```

### has_country_leader

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has leader with specified ID. Don't localize this. Tooltip only for debug.
has_country_leader = {
	ruling_only = yes/no (default = yes)
	character = <string> # recommended criteria
	name = <string> # alternative criteria
	id = <ID> # alternative criteria
}
```

### has_country_leader_ideology

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks the Ideology of the active country leader
```

### has_country_leader_with_trait

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if current country leader has specified trait.
has_country_leader_with_trait = big_fat_idiot
```

### has_custom_difficulty_setting

* Supported Scopes: any
* Supported Targets: any

```
Returns true if the game has the specified custom difficulty on: 
Example: has_custom_difficulty_setting = TheAxisIndustry
```

### has_damaged_buildings

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check for damaged buildings of nation
```

### has_decision

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has active selected decision
```

### has_defensive_war

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
is country at defensive war
```

### has_defensive_war_with

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
One country has defensive war against other country.
```

### has_deployed_air_force_size

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks for amount of aircrafts, additionally of a specified type
```

### has_design_based_on

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has a buildable non-obsolete design based on an archetype
```

### has_dlc

* Supported Scopes: any
* Supported Targets: none

```
Checks if player has a DLC.
Example: has_dlc = "name of the dlc"
```

### has_done_agency_upgrade

* Supported Scopes: COUNTRY
* Supported Targets: none

```
has country done this intelligence agency upgrade (to its highest level)
```

### has_dynamic_modifier

* Supported Scopes: STATE, COUNTRY, CHARACTER
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if scope has a dynamic modifier.
has_dynamic_modifier = {
    modifier = dynamic_modifier_name
    scope = GER #optional, if the original modifier has been targeted
}

```

### has_elections

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Checks the country's politics on allowing elections. has_elections = yes
```

### has_equipment

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks for amount of equipment stored
```

### has_event_target

* Supported Scopes: any
* Supported Targets: any

```
checks if current scope or global scope has the specified event target saved
```

### has_finished_collecting_for_operation

* Supported Scopes: COUNTRY
* Supported Targets: any

```
checks if finished collecting of resources for an operation.
Example: 
has_finished_collecting_for_operation = { 
 target = ITA 
 operation = operation_infiltrate_armed_forces_navy}
```

### has_flanked_opponent

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if side has flanked their opponent
```

### has_focus_tree

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Does current country have the specified focus tree.
```

### has_fuel

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of fuel
example:
has_fuel > 500
```

### has_full_control_of_state

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, CAPITAL

```
check controller for state(s)
```

### has_game_rule

* Supported Scopes: any
* Supported Targets: none

```
Checks if a game rule is set to a particular option.
Example:
has_game_rule = {
	rule = GER_can_remilitarize_rhineland
	option = yes
}
```

### has_global_flag

* Supported Scopes: any
* Supported Targets: any

```
has global flag been set.Check flag val date set and days since set.
Example: has_global_flag = test_flag
has_global_flag = { 
	flag = <name> (mandatory)
	value < <int> (optional)
	date > <date> (optional)
	days > <int> (optional)
}
```

### has_government

* Supported Scopes: COUNTRY
* Supported Targets: none

```
does country government (ruling party) belong to ideology group
```

### has_guaranteed

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if country has guaranteed specified country
```

### has_id

* Supported Scopes: CHARACTER
* Supported Targets: none

```
check unit leader has specified ID. Don't localize this. Tooltip only for debug.
```

### has_idea

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has idea
```

### has_idea_with_trait

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has idea with specified trait
```

### has_ideology

* Supported Scopes: CHARACTER
* Supported Targets: none

```
has_ideology = stalinism - Checks if the current character has a country leader role matching the sub-ideology
```

### has_ideology_group

* Supported Scopes: CHARACTER
* Supported Targets: none

```
has_ideology_group = communism - Checks if the current character has a country leader role matching the ideology group
```

### has_intelligence_agency

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
has country created an Intelligence Agency
```

### has_legitimacy

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Check scope country legitimacy 0-100: Example has_legitimacy < 60
```

### has_license

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Country has specific active license
Example: has_license = {
	from = TAG # has license from this country, optional
	 #if archetype is specified equipment should not be specified
	archetype = light_tank_equipment #any armor license
	equipment = { # classical equipment reference
		type = light_tank_equipment_2
		version = 0
	}
}
```

### has_manpower

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of manpower
```

### has_manpower_for_recruit_change_to

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if manpower is enough to switch recruitment laws not to be negative
```

### has_max_planning

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if side has maximal planning bonus
```

### has_military_access_to

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check country has military access to specified country
```

### has_mined

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks the mines planted by the country of the parent scope on the coastline of the target countryE.g. true if Germany has more than 1000 mines around Poland coast:
GER = {
  has_mined = {
    target = POL
    value > 1000
  }
}
```

### has_mines

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if a region has amount of mines.
has_mines = {
    region = region_id
    amount = amount_of_mines
}

```

### has_nationality

* Supported Scopes: CHARACTER
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks whether the operative has the specified nationality.
NOTE: this is invalid on non-operatives.
Examples:
has_nationality = GER

```

### has_navy_experience

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Compares current country's navy experience with right side value.
 has_navy_experience < <value>
```

### has_navy_ledger

* Supported Scopes: CHARACTER
* Supported Targets: none

```
has_navy_ledger = yes/no - Checks if the current character has a navy ledger
```

### has_navy_size

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks for amount of ships, additionally of a specified type, archetype, or sub unit definition.

Examples:
	has_navy_size = { size > 10 type = convoy } # Must have more than 10 convoys.
	has_navy_size = { size < 1 archetype = ship_hull_light } # Must not have any ships with light hulls.
	has_navy_size = { size > 39 unit = heavy_cruiser } # Must have 40 or more heavy cruisers.
	has_navy_size = { size < 100 } # Must have fewer than 100 ships of any type.
```

### has_non_aggression_pact_with

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Check if country has non aggression pact with the specified country
```

### has_occupation_modifier

* Supported Scopes: STATE
* Supported Targets: any

```
compares occupied country that creates resistance to a tag. Example: has_occupation_modifier = modifier_name
```

### has_offensive_war

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
is country at offensive war
```

### has_offensive_war_with

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
One country has offensive war against other country.
```

### has_operation_token

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if a country has a specific token against another country
has_operation_token = {
	tag = GER
	token = some_token_id
}
```

### has_opinion

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check what opinion the country has towards a specified country
```

### has_opinion_modifier

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if a country has the opinion modifier
```

### has_political_power

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of political power
```

### has_railway_connection

* Supported Scopes: any
* Supported Targets: any

```
Checks for an existing rail connection. Uses same params as can_build_railway. Example:
has_railway_connection = {
  build_only_on_allied = yes # No by default. If yes and the effect scope is country, it will only build on allied territories for the country

  # The following options are used for picking a path. You can specify multiple options and it will pick in following order:
  fallback = yes # Default no. If yes, each option will try to fallback to next one.
  # option 1: List of provinces to draw railways. If fallback = yes uses start and end provinces of the path as fallback in option 2.
  path = { 10 20 30 40 }
  # option 2: Specify start & end province IDs. It will pick the shortest path. If provinces are not valid and if fallback = yes it will use states of those provs and use in option 3.
  start_province = 42
  target_province = 84
  # option 3: Specify start & end state IDs. It will pick provinces with the best node (capital > nodes > naval )
  start_state = 50
  target_state = 100
}


```

### has_railway_level

* Supported Scopes: any
* Supported Targets: any

```
Checks if a state contains a railway at or above the specified level. Example:
has_railway_level = {
  level = 3
  state = 1234
}

```

### has_relation_modifier

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Country has specified relation modifier when dealing with _target_ county
Example: has_relation_modifier = {
	target = TAG # has license from this country, optional
	modifier = static_modifier_here
	}
}
```

### has_reserves

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if side has reserves waiting
```

### has_resistance

* Supported Scopes: STATE
* Supported Targets: any

```
returns true if state has a resistance
```

### has_resources_amount

* Supported Scopes: STATE, COUNTRY
* Supported Targets: none

```
checks for amount of resources in specified state
Example:
has_resources_amount = {
	resource = chromium
	amount > 10
	delivered = no #check the delivered amount, where all modifiers apply
	state = 31 (optional - can be used in state scope instead)
```

### has_rule

* Supported Scopes: any
* Supported Targets: none

```
Checks if a rule set for a country.
Example: has_rule = can_puppet
```

### has_stability

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check value of stability 0-1: Example has_stability < 0.6
```

### has_start_date

* Supported Scopes: any
* Supported Targets: none

```
Compare the initial start date of current game.
```

### has_state_category

* Supported Scopes: STATE
* Supported Targets: none

```
Check if state has a specific state category
```

### has_state_flag

* Supported Scopes: STATE
* Supported Targets: any

```
has state flag been setCheck flag val date set and days since set.
Example: has_state_flag = test_flag
has_state_flag = { 
	flag = <name> (mandatory)
	value < <int> (optional)
	date > <date> (optional)
	days > <int> (optional)
}
```

### has_subject

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if the country has for subject the given country
```

### has_tech

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has technology
```

### has_tech_bonus

* Supported Scopes: COUNTRY
* Supported Targets: any

```
checks if the country has a bonus for the specified technology or category
Example:
has_tech_bonus = {
	technology =  <tech>
	category = <tech cat>
	}
```

### has_template

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Check if country has a division template of specific name
```

### has_template_ai_majority_unit

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has a division template that is majority of specific unit using AI's priorities rather than visual
```

### has_template_containing_unit

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has a division template that contains a specific unit
```

### has_template_majority_unit

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has a division template that is majority of specific unit
```

### has_terrain

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if a country has any province of the specified terrain type.
Example: has_terrain = mountain
```

### has_trait

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: none

```
check if sides leader has trait
```

### has_unit_leader

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country has unit leader with specified ID. Don't localize this. Tooltip only for debug.
```

### has_unit_leader_flag

* Supported Scopes: CHARACTER
* Supported Targets: any

```
This trigger is deprecated in favor of has_character_flag (which does the same)has a character flag been setCheck flag val date set and days since set.
Example: has_unit_leader_flag = test_flag
has_unit_leader_flag = { 
	flag = <name> (mandatory)
	value < <int> (optional)
	date > <date> (optional)
	days > <int> (optional)
}
```

### has_variable

* Supported Scopes: any
* Supported Targets: any

```
Checks if a variable exists in a scope
```

### has_volunteers_amount_from

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares number of volunteers from the country. Example: has_volunteers_amount_from = { tag = ITA count > 1 }
```

### has_war

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
is country at war
```

### has_war_support

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check value of war_support 0-1: Example has_war_support < 0.6
```

### has_war_together_with

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Are the countries fighting on the same side of a war
```

### has_war_with

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
is countries at war
```

### has_wargoal_against

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if country has a wargoal against the target. 
Example: ENG = { has_wargoal_against = GER }
```

### hidden_trigger

* Supported Scopes: STATE, COUNTRY, CHARACTER, COMBATANT, ACE, STRATEGIC_REGION, OPERATION
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
a hidden trigger, anything in it not shown in tooltips
```

### ic_ratio

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares the ratio of total industrial capacity between the scope country and the one set with 'tag'
```

### if

* Supported Scopes: any
* Supported Targets: none

```
if_, CIfTrigger, A conditional trigger
if = { limit = { <triggers> } <trigger> }
```

### impassable

* Supported Scopes: STATE
* Supported Targets: any

```
checks if a state is impassable
```

### intel_level_over

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compare the absolute, percentage based, intel level the scoped country has over
the specified one:
GER = {
  # is true if all predicates are satisfied
  intel_level_over = { 
    target = POL
    civilian_intel > 0.5  # GER has more than 50% civ. intel over POL
    army_intel = 0  # GER has no army intel over POL
    navy_intel > 0  # GER has at least some navy intel over POL
    # airforce_intel is not specified and thus ignored in the comparison

    # NOTE: since we are comparing the intel level of a country over another,
    # checking for values less than 0 does not make sense
    # NOTE: since we are comparing percentages, using values greater than 1
    # does not make sense.
  }
}

```

### is_active_decryption_bonuses_enabled

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
checks if the country activated their active cipher decryption bonuses. Example is_active_decryption_bonuses_enabled = GER
```

### is_advisor

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_advisor = yes/no - Checks if the current character is an advisor
```

### is_ai

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if country is AI controlled.
```

### is_air_chief

* Supported Scopes: CHARACTER
* Supported Targets: none

```
_is_air_chief = yes/no - Checks if the current character is an air chief
```

### is_ally_with

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
checks if a country is ally with another country. will check if two countries are same/in same faction/has subject master relation
Example: is_ally_with = ITA 

```

### is_amphibious_invasion

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if combat is at night
```

### is_army_chief

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_army_chief = yes/no - Checks if the current character is an army chief
```

### is_army_leader

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_army_leader = yes/no - Checks if the current character is a army leader
```

### is_assigned

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_assigned = yes/no - Checks if the current unit leader is assigned to command an army/navy
```

### is_attacker

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if attacker side in combat
```

### is_border_conflict

* Supported Scopes: STATE
* Supported Targets: any

```
checks if a state is in border conflict
```

### is_border_war

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: any

```
Checks if a the combatant or leader has a border war
```

### is_capital

* Supported Scopes: STATE
* Supported Targets: none

```
Is scope state a capital. 169 = { is_capital = yes }
```

### is_character

* Supported Scopes: CHARACTER
* Supported Targets: none

```
Checks whether the character matches the character ID
```

### is_character_slot

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_character_slot = 'character_slot_name' - Checks if the current character is in the character slot
```

### is_claimed_by

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if state is claimed by country
```

### is_coastal

* Supported Scopes: STATE
* Supported Targets: none

```
check if state is coastal
```

### is_controlled_by

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if state is controlled by
```

### is_core_of

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if state is core of country
```

### is_corps_commander

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_corps_commander = yes/no - Checks if the current character is a corps commander
```

### is_country_leader

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_country_leader = yes/no - Checks if the current character is a country leader
```

### is_cryptology_department_active

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
has country an active cryptology department
```

### is_debug

* Supported Scopes: any
* Supported Targets: any

```
returns true if game is in debug mode (launched with -debug argument)
```

### is_decrypting

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
checks if is currently decrypting a cipher. Example is_decrypting = GER
```

### is_defender

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if defender side in combat
```

### is_demilitarized_zone

* Supported Scopes: STATE
* Supported Targets: any

```
checks if a state is a demilitarized zone
```

### is_dynamic_country

* Supported Scopes: COUNTRY
* Supported Targets: any

```
returns true if the country is a dynamic country (tag is D01-D50)
```

### is_exile_host

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Checks if scope country is hosting an exile. is_exile_host = yes
```

### is_exiled_in

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if scope country is a government in exile in target tag. is_exiled_in = ENG
```

### is_exiled_leader

* Supported Scopes: CHARACTER
* Supported Targets: none

```
Checks if scope leader is from an exiled government. is_exiled_leader = yes
```

### is_exiled_leader_from

* Supported Scopes: CHARACTER
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if scope leader is from specified exiled government. is_exiled_leader_from = FRA
```

### is_faction_leader

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country leads a faction
```

### is_female

* Supported Scopes: COUNTRY, CHARACTER, ACE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
checks if scoped unit leader, ace or country is female
```

### is_field_marshal

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_field_marshal = yes/no - Checks if the current unit leader is a field marshall
```

### is_fighting_air_units

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if side is fighting air units
```

### is_fighting_in_terrain

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check what terrain is in combat
```

### is_fighting_in_weather

* Supported Scopes: COMBATANT
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks the weather on a combat
Example:
# true if weather is artic water
is_fighting_in_weather = artic_water
# true if weather is either artic_water or snow
is_fighting_in_weather = { artic_water snow }

```

### is_fully_controlled_by

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if state is fully controlled by specified tag
```

### is_fully_decrypted

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
checks if fully decrypted a cipher. Example is_fully_decrypted = GER
```

### is_government_in_exile

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Checks if scope country an exiled government. is_government_in_exile = yes
```

### is_guaranteed_by

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if guaranteed by specified country
```

### is_high_command

* Supported Scopes: CHARACTER
* Supported Targets: none

```
_is_high_command_ = yes/no - Checks if the current character is in high command
```

### is_historical_focus_on

* Supported Scopes: any
* Supported Targets: none

```
check if the historical focus is active
```

### is_hosting_exile

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if scope country is hosting target tag as an exile. is_hosting_exile = FRA
```

### is_in_array

* Supported Scopes: any
* Supported Targets: none

```
Checks if an element is in array
Example: is_in_array = {
	array = array_name
	value = 42
}
#shorter usage: is_in_array = { array_name = 42 }
```

### is_in_faction

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if member of any faction
```

### is_in_faction_with

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if member of same faction as specified country
```

### is_in_home_area

* Supported Scopes: STATE
* Supported Targets: any

```
Checks if the first province in the state is connected to the capital of its owner
```

### is_in_peace_conference

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if the country is currently in a peaceconference
```

### is_in_tech_sharing_group

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if country is member specified technology sharing group.
Example: is_in_technology_sharing_group = commonwealth_research
```

### is_ironman

* Supported Scopes: any
* Supported Targets: none

```
Check if current game is ironman.
```

### is_island_state

* Supported Scopes: STATE
* Supported Targets: any

```
always returns specified value
```

### is_justifying_wargoal_against

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if country is justifying a wargoal against the target. 
Example: ENG = { is_justifying_wargoal_against = GER }
```

### is_leading_army

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_leading_army = yes/no - Checks if the current unit leader is leading a single army (not army group)
```

### is_leading_army_group

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_leading_army_group = yes/no - Checks if the current unit leader is leading an army group (not single army)
```

### is_leading_volunteer_group

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
is_leading_volunteer_group = FRA
```

### is_leading_volunteer_group_with_original_country

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
is_leading_volunteer_group_with_original_country = FRA
```

### is_lend_leasing

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
is lend-leasing country
```

### is_licensing_any_to

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Current country is licensing something to target country
Example: is_licensing_any_to = ENG
```

### is_licensing_to

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Country is licensing specific equipment to target. License is active
Example: is_licensing_to = {
	target = TAG # licensing to this country
	 #if archetype is specified equipment should not be specified
	archetype = light_tank_equipment #any armor license
	equipment = { # classical equipment reference
		type = light_tank_equipment_2
		version = 0
	}
}
```

### is_major

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if country is a major
```

### is_navy_chief

* Supported Scopes: CHARACTER
* Supported Targets: none

```
_is_navy_chief_ = yes/no - Checks if the current character is a navy chief
```

### is_navy_leader

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_navy_leader = yes/no - Checks if the current character is a navy leader
```

### is_neighbor_of

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if neighbor ( controlled territory ) with specified country
```

### is_on_continent

* Supported Scopes: STATE
* Supported Targets: none

```
is state located on continent
```

### is_operation_type

* Supported Scopes: OPERATION
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
checks the type of operation
```

### is_operative

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_operative = yes/no - Checks if the current character is an operative
```

### is_operative_captured

* Supported Scopes: CHARACTER
* Supported Targets: none

```
Checks whether the operative has the matching captured status

```

### is_owned_and_controlled_by

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if state is owned by
```

### is_owned_by

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if state is owned by
```

### is_owner_neighbor_of

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if neighbor ( owned territory ) with specified country
```

### is_political_advisor

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_political_advisor = yes/no - Checks if the current character is a political advisor
```

### is_preparing_operation

* Supported Scopes: COUNTRY
* Supported Targets: any

```
checks if preparing a specific operation.
Example: 
is_preparing_operation = { 
 target = ITA 
 operation = operation_infiltrate_armed_forces_navy}
```

### is_puppet

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Checks if the country is puppet of any other country
```

### is_puppet_of

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if the country is puppet of specified country
```

### is_researching_technology

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if the country is currently researching a specific technology.
Example: is_researching_technology = mechanised_infantry
```

### is_running_operation

* Supported Scopes: COUNTRY
* Supported Targets: any

```
checks if running a specific operation. operation can be ommitted to check for any operation
Example: 
is_running_operation = { 
 target = ITA 
 operation = operation_infiltrate_armed_forces_navy}
```

### is_spymaster

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check if country is Spy Master
```

### is_staging_coup

* Supported Scopes: COUNTRY
* Supported Targets: none

```
is_staging_coup = yes - Returns true if current country is staging a coup in another any country.
```

### is_subject

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Checks if the country is subject of any other country
```

### is_subject_of

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if the country is subject of specified country
```

### is_target_of_coup

* Supported Scopes: COUNTRY
* Supported Targets: none

```
is_target_of_coup = yes - Returns true if current country is being targeted by a coup from any country.
```

### is_theorist

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_theorist = yes/no - Checks if the current character is a theorist
```

### is_tutorial

* Supported Scopes: any
* Supported Targets: none

```
check if the tutorial is active
```

### is_unit_leader

* Supported Scopes: CHARACTER
* Supported Targets: none

```
is_unit_leader = yes/no - Checks if the current character is a unit leader
```

### is_winning

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if defender side in combat
```

### land_doctrine_level

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks researched land doctrine level
```

### less_combat_width_than_opponent

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if side has more combat width than their opponent
```

### log

* Supported Scopes: any
* Supported Targets: none

```
Print message to game.log - Can be localized
```

### logistics_skill_level

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: none

```
Compares logistics skill level of a unit leader.
Example: logistics_skill_level > 5
```

### manpower_per_military_factory

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Number of available manpower per factory the country has. Excluding dockyards.
manpower_per_military_factory < 1000
```

### meta_trigger

* Supported Scopes: STATE, COUNTRY, CHARACTER, COMBATANT, ACE, STRATEGIC_REGION, OPERATION
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
meta triggers can be used for building triggers from strings and running them. following example will test if Germany has 42 pp:
meta_trigger = {
    text = {
        [COUNTRY] = {
            political_power > [POW]
        }
    }
    COUNTRY = "GER"
    POW = 42
    debug = no #set to yes if you want to see what game actually executes
}

```

### min_planning

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if side has maximal planning bonus
```

### mine_threat

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
A trigger to check how dangerous enemy mines are for a country. Controlled by NAVAL_MINE_DANGER defines. Returns a value between 0 and 1. Example mine_threat > 0.5 
```

### modulo_temp_variable

* Supported Scopes: any
* Supported Targets: none

```
modulos a temp variable with another. Example: 
modulo_temp_variable = { 
  var = variable_to_modulo 
  value = divisior 
}
```

### multiply_temp_variable

* Supported Scopes: any
* Supported Targets: none

```
Multiplies a temporary variable by a value or another variable
Example: multiply_temp_variable = {
var = num_dogs
	value = 42
	tooltip = loc_str_id_with_LEFT_and_RIGHT  #localized text with LEFT and RIGHT tokens in it, tokens will replaced by values. _NOT is added to end for negative trigger
}
```

### naval_strength_comparison

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares navies of two sides.
naval_strength_comparison = {
	other = GER # by default compares to the from scope
  tooltip = 'key' #tooltip is 'navy strength' by default, the key can be overridden if wanted 
	ratio > 1.5   # default is 1
	sub_unit_def_weights = { # if not specified, it will weigh all ships as 1. otherwise only specified sub unit types will be counted
		carrier = 1
		battleship = 2
	}
}

```

### naval_strength_ratio

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares the estimated navy strength between the scope country and the one set with 'tag' 
naval_strength_ratio = { 
  tag = GER 
  ratio > 0.5 
}
```

### network_national_coverage

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks network national coverage you have over a country. Example: 
network_national_coverage = { 
 target = GER
 value > 0.5
} 

```

### network_strength

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks network strength you have in a country. Examples: 
# country has a network strength greater than 50% over germany
network_strength = { 
 target = GER
 value > 50
}

# country has a network strength greater than 50% over germany in state 53
network_strength = { 
 target = GER
 state = 53 value > 50
}

# country has a network strength greater than 50% in state 53, regardless of the target
network_strength = { 
 state = 53
 value > 50
}


```

### night

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if combat is at night
```

### non_damaged_building_level

* Supported Scopes: STATE
* Supported Targets: none

```
check if a state has enough non damaged buildings


Example:
non_damaged_building_level = {
	building = arms_factory
	level = 5
}
```

### not

* Supported Scopes: any
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
negates content of trigger
```

### not_already_hired_except_as

* Supported Scopes: CHARACTER
* Supported Targets: none

```
not_already_hired_except_as = <slot> - For characters with several advisor roles, checks if the current character is already assigned in another advisor slot.
example: let's say a character can be a political advisor and a theorist. But they should only be hired in one role, never both at the same time.
then you may set in the advisor available trigger :
	advisor = {
		slot = political_advisor
		available = { not_already_hired_except_as = political_advisor } 
		...
	}
	advisor = {
		slot = theorist
		available = { not_already_hired_except_as = theorist } 
		...
	}

```

### num_claimed_peace_conference_neighbour_states

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if a country owns the amount of states neighbouring the scoped state.
```

### num_divisions

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Will compare towards the amount of divisions a country has control over, if strength matters use has_army_size.
```

### num_faction_members

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares the number of members in the faction for the current country. 
 Example: num_faction_members > 10
```

### num_fake_intel_divisions

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Will compare towards the amount of fake intel divisions a country has control over. .
```

### num_finished_operations

* Supported Scopes: COUNTRY
* Supported Targets: any

```
Compares number of completed operations.
Example: 
num_finished_operations = { 
 target = ITA 
 operation = operation_infiltrate_armed_forces_navy value > 35 
}
```

### num_free_operative_slots

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks the number of operative a country can recruit right now.
Note that this is not necessarily greater than zero if num_operative_slots returned a number greater than the number of operative.
```

### num_occupied_states

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check the number of states occupied by nation
```

### num_of_available_civilian_factories

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of available civilian factories
```

### num_of_available_military_factories

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of available military factories
```

### num_of_available_naval_factories

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of available naval factories
```

### num_of_civilian_factories

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of civilian factories
```

### num_of_civilian_factories_available_for_projects

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of civilian factories available for a new project to use
```

### num_of_controlled_factories

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check the number of factories in controlled states excluding any gained or lost through trade, relations, modifiers etc.
```

### num_of_controlled_states

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of controlled stats
```

### num_of_factories

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of total factories
```

### num_of_military_factories

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of military factories
```

### num_of_naval_factories

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of naval factories
```

### num_of_nukes

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of nukes
```

### num_of_operatives

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks the number of operatives the country controls
```

### num_of_owned_factories

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check the number of factories in owned states excluding any gained or lost through trade, relations, modifiers etc.
```

### num_of_supply_nodes

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of supply nodes
```

### num_operative_slots

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks the number of available operative slots a country has.
If this differs from the number of operative, this does not mean the country can recruit an operative, but that it will eventually be able to.
```

### num_owned_neighbour_states

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks if a country owns the amount of states neighbouring the scoped state
```

### num_researched_technologies

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Number of researched technologies
```

### num_subjects

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check the number of subjects of nation
```

### num_tech_sharing_groups

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks how many groups a nation is a member of
```

### num_units

* Supported Scopes: CHARACTER
* Supported Targets: none

```
Check number of units commanded by the unit leader 
 num_units > 2
```

### occupation_law

* Supported Scopes: STATE
* Supported Targets: any

```
checks occupation law of state. Example: occupation_law = brutally_oppressive_occupation
```

### occupied_country_tag

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
compares occupied country that creates resistance to a tag. Example: occupied_country_tag = ITA
```

### operative_leader_mission

* Supported Scopes: CHARACTER
* Supported Targets: none

```
Checks whether the operative is performing the given mission:
operative_leader_mission = build_intel_network
```

### operative_leader_operation

* Supported Scopes: CHARACTER
* Supported Targets: none

```
Checks whether the operative is performing the given operation:
operative_leader_operation = operation_rescue_operative
```

### or

* Supported Scopes: any
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
at least one entry inside trigger must be true
```

### original_research_slots

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check number of research slots at start of game
```

### original_tag

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
original tag is ( for civil wars checks )
```

### owns_state

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, CAPITAL

```
check owner for state(s)
```

### phase

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check if we are in this combat phase
```

### planning_skill_level

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: none

```
Compares planning skill level of a unit leader.
Example: planning_skill_level > 5
```

### political_power_daily

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks if daily political power increase is more or less that specified value 
 political_power_daily > 1.5
```

### political_power_growth

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Check the value of political power daily growth.Exacmple: political_power_growth > 0
```

### print_variables

* Supported Scopes: any
* Supported Targets: none

```
prints all variables in scope and temp variables to a file
Example: print_variables = {
file = log_file
text = header_text
append = yes
print_global = yes
var_list = { a b c } #optional
}
```

### received_expeditionary_forces

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Checks that the country in scope has received the specified amount of expeditionary forces from the specified country
E.g. true if Germany is commaning more than 100 expeditionary forces from Poland:
GER = {
  received_expeditionary_forces = {
    sender = POL
    value > 100
  }
}
```

### recon_advantage

* Supported Scopes: COMBATANT
* Supported Targets: none

```
checks if side has an advantage in recon level
```

### region

* Supported Scopes: STATE
* Supported Targets: none

```
check state's strategic area id
```

### remove_from_temp_array

* Supported Scopes: any
* Supported Targets: none

```
Removes an element from a temporary array using value or index
Example: remove_from_temp_array = {
	array = array_name
	value = 42 #optional, use index or this. if neither it removes last element
	index = 3 #optional, use value or this. if neither it removes last element
}
#shorter usage: remove_from_temp_array = { array_name = 42 }
```

### reserves

* Supported Scopes: COMBATANT
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
check amount of reserves
```

### resistance

* Supported Scopes: STATE
* Supported Targets: any

```
Compares the current resistance level of a state to a value. Example: resistance > 50 
```

### resistance_speed

* Supported Scopes: STATE
* Supported Targets: any

```
Compares the current resistance speed of a state to a value. Example: resistance_speed > 50 
```

### resistance_target

* Supported Scopes: STATE
* Supported Targets: any

```
Compares the target resistance level of a state to a value. Example: resistance_target > 50 
```

### resize_temp_array

* Supported Scopes: any
* Supported Targets: none

```
Resizes a temp array
Example: resize_temp_array = {
	array = array_name
	value = 42 #optional, if not specified and array grows the new elements are set to this (default 0)
	size = 3 #if higher than old size, new elements are added to end. otherwise last elements are removed to match to new size
}
#shorter usage: resize_temp_array = { array_name = 3 }
```

### round_temp_variable

* Supported Scopes: any
* Supported Targets: none

```
Rounds a temporary variable
Example: round_temp_variable = num_dogs
```

### set_temp_variable

* Supported Scopes: any
* Supported Targets: none

```
Sets a temporary variable to a value or another variable
Example: set_temp_variable = {
var = num_dogs
	value = 42
	tooltip = loc_str_id_with_LEFT_and_RIGHT  #localized text with LEFT and RIGHT tokens in it, tokens will replaced by values. _NOT is added to end for negative trigger
}
```

### set_temp_variable_to_random

* Supported Scopes: any
* Supported Targets: none

```
sets a temp variable to a random value. example 
set_temp_variable_to_random = num_dogs #sets num_dogs a random value between [0, 1) 
set_temp_variable_to_random = { 
	var = num_dogs #variable to set 
	min = 5 #default 0. value will be set in between [min, max) 
	max = 10 #default 1. value will be set in between [min, max) 
	integer = yes #default no. if yes the number value will be an integer 
} 

```

### ships_in_area

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks for amount of ships in specified area
```

### ships_in_state_ports

* Supported Scopes: COUNTRY
* Supported Targets: none

```
checks for amount of ships in specified state's ports. 
ships_in_state_ports = { 
  type = ship_category 
  state = state_id 
  size = 42 
}
```

### skill

* Supported Scopes: CHARACTER, COMBATANT
* Supported Targets: none

```
compare leader skill levels
```

### skill_advantage

* Supported Scopes: COMBATANT
* Supported Targets: none

```
compare leader skill levels
```

### state

* Supported Scopes: STATE
* Supported Targets: THIS, ROOT, PREV, FROM, CAPITAL

```
check state id
```

### state_and_terrain_strategic_value

* Supported Scopes: STATE
* Supported Targets: none

```
Checks for state strategic value
```

### state_population

* Supported Scopes: STATE
* Supported Targets: none

```
check the population in the state
```

### state_population_k

* Supported Scopes: STATE
* Supported Targets: none

```
check the population in the state in thousands (use to avoid variable overflows)
```

### state_strategic_value

* Supported Scopes: STATE
* Supported Targets: none

```
Checks for state strategic value
```

### stockpile_ratio

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Compares the ratio of equipment archetype in stockpile vs used. a value of 2 means we have double in stockpile of what is fielded or in training.
```

### strength_ratio

* Supported Scopes: COUNTRY
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
Compares the estimated army strength between the scope country and the one set with 'tag'
```

### subtract_from_temp_variable

* Supported Scopes: any
* Supported Targets: none

```
Subtracts a value or a variable to a temporary variable
Example: subtract_from_temp_variable = {
var = num_dogs
	value = 42
	tooltip = loc_str_id_with_LEFT_and_RIGHT  #localized text with LEFT and RIGHT tokens in it, tokens will replaced by values. _NOT is added to end for negative trigger
}
```

### surrender_progress

* Supported Scopes: COUNTRY
* Supported Targets: none

```
check if a country is close to surrendering
```

### tag

* Supported Scopes: COUNTRY, COMBATANT
* Supported Targets: THIS, ROOT, PREV, FROM, OWNER, CONTROLLER, OCCUPIED, CAPITAL

```
country tag trigger
```

### target_conscription_amount

* Supported Scopes: COUNTRY
* Supported Targets: none

```
Checks the target conscription amount of the country.

```

### temperature

* Supported Scopes: COMBATANT
* Supported Targets: none

```
check combat province temperature
```

### threat

* Supported Scopes: any
* Supported Targets: none

```
check the global threat value. 0-1 value
```

