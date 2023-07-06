import{_ as e,o as a,c as o,U as t}from"./chunks/framework.82cf92f3.js";const s="/assets/hammerstone_wide.cc13ae54.png",g=JSON.parse('{"title":"Hammerstone","description":"","frontmatter":{},"headers":[],"relativePath":"hammerstone/introduction.md","filePath":"hammerstone/introduction.md","lastUpdated":1688236295000}'),i={name:"hammerstone/introduction.md"},n=t('<p><img src="'+s+'" alt="Hammerstone Logo"></p><h1 id="hammerstone" tabindex="-1">Hammerstone <a class="header-anchor" href="#hammerstone" aria-label="Permalink to &quot;Hammerstone&quot;">​</a></h1><p>Hammerstone or Hammerstone Framework is a modding framework created by SirLich. The source code of Hammerstone is available <a href="https://github.com/SirLich/hammerstone-framework" target="_blank" rel="noreferrer">here</a>.</p><h2 id="why-use-hammerstone" tabindex="-1">Why use Hammerstone? <a class="header-anchor" href="#why-use-hammerstone" aria-label="Permalink to &quot;Why use Hammerstone?&quot;">​</a></h2><p>Modding is a tricky topic, because it requires interacting with <em>game code</em> directly, often in uncomfortable, or unintuitive ways. The code cleanliness and design requirements for <em>writing a game</em> are often quite different from the aspects that make a game fun and easy to mod. Enter: Hammerstone! A framework provides a layer of insulation between game code, and mod-code, and since we have control, over this layer, we can pack it full of as many utilities and nice-to-haves as we want.</p><h3 id="insulation-from-game-code" tabindex="-1">Insulation from Game Code <a class="header-anchor" href="#insulation-from-game-code" aria-label="Permalink to &quot;Insulation from Game Code&quot;">​</a></h3><p>When Sapiens updates, some mods may break. This is an undeniable risk of building projects against an early access game. By piping your logic through <em>Hammerstone</em>, you can a layer of protection from these breaking changes. While your mod <em>may break</em>, it may also be automatically <em>fixed</em> when Hammerstone is updated to support the latest version of Hammerstone. When everyone is using the same API, we can focus our efforts on bringing back compatibility, without changing the external API.</p><h3 id="a-real-api" tabindex="-1">A real API <a class="header-anchor" href="#a-real-api" aria-label="Permalink to &quot;A real API&quot;">​</a></h3><p>Sapiens doesn&#39;t have a modding &#39;API&#39; so to speak. You can shadow (override) files, and tweak functions and variables. If you&#39;re clever, you can add in nearly anything the base game offers; new plants, animals, items, buildables, menus, etc. But this isn&#39;t the same as having an &#39;API&#39; to do these tasks.</p><p>Hammerstone is packed full of things targeted <em>at modders</em> which can be thought of as a public API for mod building.</p><h2 id="what-does-hammerstone-offer" tabindex="-1">What does Hammerstone Offer? <a class="header-anchor" href="#what-does-hammerstone-offer" aria-label="Permalink to &quot;What does Hammerstone Offer?&quot;">​</a></h2><p>Hammerstone offers a <em>lot</em>, but it&#39;s generally broken into three sections:</p><h3 id="simple-additions-and-utilities" tabindex="-1">Simple Additions and Utilities <a class="header-anchor" href="#simple-additions-and-utilities" aria-label="Permalink to &quot;Simple Additions and Utilities&quot;">​</a></h3><p>Hammerstone is implemented as a collection of shadows on base game code. These shadows use priority <code>0</code>, which means that when you shadow these self-same files, you are receiving a module which is pre-configured by Hammerstone for your use. For example <code>storage:addStorage</code>, which allows adding a storage, with logging and error checking. Without the <code>addStorage</code> method, you would need to inject the data yourself into the storage module, and re-configure the type-maps. Using Hammerstone allows you to benefit from these little utilities and functions, seamlessly integrated into the base game modules.</p><h3 id="systems" tabindex="-1">Systems <a class="header-anchor" href="#systems" aria-label="Permalink to &quot;Systems&quot;">​</a></h3><p>Hammerstone offers a number of modules, external to any base game files, which you can require in your projects. These systems provide &#39;API&#39; access to complex parts of the game code. In other words, rather than shadowing many files, in order to achieve a goal, you can rather require a Hammerstone <em>system</em>. Examples of systems include:</p><ul><li><code>inputManager</code> for input handling</li><li><code>saveState</code> for writing and reading values into the save-game system (saved, for next play-through!)</li><li><code>uiManager</code> for registering UI classes into various &#39;slots&#39;</li></ul><h3 id="data-driven-api" tabindex="-1">Data Driven API <a class="header-anchor" href="#data-driven-api" aria-label="Permalink to &quot;Data Driven API&quot;">​</a></h3><p>Last but not least, Hammerstone offers a config-driven API for modding Sapiens. This ambitious effort transforms the data-flow in mods entirely, allowing you to define your mod as <em>configuration files</em>, rather than shadowing dozens of base game files. You can read more about the &#39;DDAPI&#39; (data driven API) in its own section.</p>',19),r=[n];function m(d,h,l,c,u,f){return a(),o("div",null,r)}const y=e(i,[["render",m]]);export{g as __pageData,y as default};
