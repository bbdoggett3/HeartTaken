UPDATE users
SET 
    username = $2,
    profile_pic = $3
WHERE id = $1

returning *;
