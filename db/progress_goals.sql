SELECT * FROM user_relationship
WHERE user_id = $1
ORDER BY user_relationship_id ASC;