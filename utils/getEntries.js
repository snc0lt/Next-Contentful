import { createClient } from 'contentful'

const client = createClient({
    space: 'qcgjh90pjiw2',
    accessToken: 'jNPajp2XV30zEQaMqXvdbJ9R3K3pgazELXujXo9w97Q'
  })

export const getEntries = async (entry) => {
    const res = await client.getEntries({
        content_type : entry
    })

    return res
}
