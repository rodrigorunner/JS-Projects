class EasyHTTP {
    async get(url) {
        const res = await fetch(url)

        const data = await res.json()

        return data
    }

      async post(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const dataUser = await res.json()

        return dataUser
    }

    async put(url, data) {
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const dataUser = await res.json()

        return data
    }

    async delete(url) {
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type':'application/json'
            }
        })

        const data = await res.json()

        return data
    }
}
