// old way to set up
// const express = require('express');
// const app = express();

// app.get('/api/users', (req,res) => {
//     const users = [
//         {
//             id: 1, name: 'Mike',
//             id: 2, name: 'Jay',
//             id: 3, name: 'Emmett'
//         }
//     ]

//     res.json(users);
// })

// app.listen(3000, () => {
//     console.log('listening');
// })

// localhost:/3000/api/users
export async function GET(request) {
        const users = [
        {
            id: 1, name: 'Mike',
            id: 2, name: 'Jay',
            id: 3, name: 'Emmett'
        }
    ]

    return new Response(JSON.stringify(users))
}

