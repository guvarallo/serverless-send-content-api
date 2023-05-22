exports.handler = async function (context, event, callback) {
  const client = context.getTwilioClient()
  const msgService = context.MESSAGING_SERVICE

  try {
    const { contentSid, to } = event

    await client.messages
      .create({
        contentSid: contentSid,
        from: msgService,
        to: to
      })
      .then(async message => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log('message')
        console.log(message)
      })

    return callback(null)
  } catch (err) {
    console.log('err')
    console.log(err)
    return callback(err)
  }
}
