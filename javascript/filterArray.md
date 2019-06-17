

let userIds = body.users.flatMap((u) => u.product === product ? u.userId : []);


