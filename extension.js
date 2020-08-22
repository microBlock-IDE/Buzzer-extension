({
    name: "Buzzer", // Category Name
    icon: "/static/icon.png", // Category icon
    color: "#F39C12", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="tone1">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">4</field>
                        </shadow>
                    </value>
                    <value name="freq">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                    <value name="time">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="tone2">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">4</field>
                        </shadow>
                    </value>
                    <value name="freq">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="no_tone">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">4</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ]
});
