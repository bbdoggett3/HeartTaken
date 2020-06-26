UPDATE user_relationship
SET count = count + 1
WHERE goal_type_id = $1 AND user_id = $2;