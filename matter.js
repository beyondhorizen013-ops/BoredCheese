<!DOCTYPE html>
<html>
<head>
    <title>Cheese Sandbox</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
    <style>body { margin: 0; overflow: hidden; background: #222; }</style>
</head>
<body>
    <script>
        const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;
        const engine = Engine.create();
        const render = Render.create({ element: document.body, engine: engine, options: { width: window.innerWidth, height: window.innerHeight, wireframes: false, background: '#222' } });
        
        const ground = Bodies.rectangle(window.innerWidth/2, window.innerHeight, window.innerWidth, 60, { isStatic: true });
        Composite.add(engine.world, ground);

        window.addEventListener('mousedown', () => {
            const cheese = Bodies.rectangle(event.clientX, event.clientY, 50, 50, {
                render: { sprite: { texture: 'https://img.icons8.com/emoji/48/000000/cheese-wedge.png' } }
            });
            Composite.add(engine.world, cheese);
        });

        Render.run(render);
        Runner.run(Runner.create(), engine);
    </script>
</body>
</html>
