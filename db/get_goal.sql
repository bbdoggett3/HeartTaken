SELECT goal  --maybe need to select * 
FROM relationship_goals
WHERE goal_type_id = $1;