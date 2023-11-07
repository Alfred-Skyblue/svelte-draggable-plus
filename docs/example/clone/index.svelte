<script>
    import { Draggable } from 'svelte-draggable-plus'
    let list = [
        {
            name: 'Joao',
            id: '1'
        },
        {
            name: 'Jean',
            id: '2'
        },
        {
            name: 'Johanna',
            id: '3'
        },
        {
            name: 'Juan',
            id: '4'
        }
    ]
    let list2 = list.map((item) => ({
        name: `${item.name}-2`,
        id: `${item.id}-2`
    }))
    const options = {
        ghostClass: 'ghost',
        group: { name: 'people', pull: 'clone', put: false }
    }

    const options2 = {
        animation: 150,
        group: 'people'
    }
</script>

<div class="flex">
    <Draggable bind:items={list} key="id" {options}>
        <div slot="element" let:item>
            {item.name}
        </div>
    </Draggable>
    <Draggable bind:items={list2} key="id" options={options2}>
        <div slot="element" let:item>
            {item.name}
        </div>
    </Draggable>
</div>

<div class="flex">
	<pre>
		{JSON.stringify(list, null, 2)}
	</pre>
    <pre>
		{JSON.stringify(list2, null, 2)}
	</pre>
</div>
