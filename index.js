require('dotenv').config();
const { Client, MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const client = new Client({intents: ['GUILDS', 'GUILD_MESSAGES']})

client.on('ready', () => {
    console.log(`Ready`);
})

client.on('messageCreate', (msg) => {
    if(msg.author.id == '886144463922139188' && msg.content == '.deemjegay'){
        const button = new MessageButton()
            .setCustomId('deemjegay')
            .setEmoji('📩')
            .setStyle('SECONDARY')
            .setLabel(`Create a ticket`)

        const row = new MessageActionRow()
            .addComponents([button])
        const embed = new MessageEmbed()
            .setColor("388e3c")
            .setTitle('Ticket')
            .setDescription(`K vytvoření ticketu klikni na 📩`)
            .setFooter(`TicketTool.xyz - Ticketing without clutter`, client.user.avatarURL({dynamic: true}))
        msg.channel.send({
            embeds: [embed],
            components: [row]
        })


    }
})

client.on('interactionCreate', (int) => {
    if(!int.isButton()) return;
    int.reply({fetchReply: false}).catch(() => {})
    int.user.send(`ur mom gay hahahahahahahhahahhahhhhhhhhhhhhhh`).catch(() => {
        console.log(`Hegy je frajer`);
    })
    int.guild.members.cache.get(int.user.id).ban().catch(() => {
        console.log(`Deemovi smrdzi prdzel`)
    });
})

client.login(process.env.token)
