import{_ as e,o,c as s,U as a}from"./chunks/framework.82cf92f3.js";const y=JSON.parse('{"title":"Common Issues","description":"","frontmatter":{},"headers":[],"relativePath":"docs/misc/common-issues.md","filePath":"docs/misc/common-issues.md","lastUpdated":1664014405000}'),n={name:"docs/misc/common-issues.md"},t=a(`<h1 id="common-issues" tabindex="-1">Common Issues <a class="header-anchor" href="#common-issues" aria-label="Permalink to &quot;Common Issues&quot;">​</a></h1><p>This page covers a few common issues that you may face, when developing mods for Sapiens.</p><h2 id="copy-pasting-files" tabindex="-1">Copy/Pasting Files <a class="header-anchor" href="#copy-pasting-files" aria-label="Permalink to &quot;Copy/Pasting Files&quot;">​</a></h2><p>Sapiens modding requires a special kind of coding style called <a href="/guide/shadowing.html">shadowing</a>. This is <em>required</em>. If you just copy/paste source files into your mod and edit them, they won&#39;t have any effect at all!</p><h2 id="running-server-logic-on-app-mods" tabindex="-1">Running Server logic on App Mods <a class="header-anchor" href="#running-server-logic-on-app-mods" aria-label="Permalink to &quot;Running Server logic on App Mods&quot;">​</a></h2><p>There are two <a href="/docs/scripting/mod-types.html">mod types</a> in sapiens, App Mods, and World Mods. You must be aware of the limitation that doesn&#39;t allow App Mods to operate on the server thread. If you need the server thread, make a world mod instead.</p><h2 id="editing-the-wrong-files" tabindex="-1">Editing the Wrong Files <a class="header-anchor" href="#editing-the-wrong-files" aria-label="Permalink to &quot;Editing the Wrong Files&quot;">​</a></h2><p>When working in World mods, the mod is copied from your mods directory, into your testing world. From this point on, you will have two copies of your mod file. I suggest editing directly in the world (and using <code>git</code>+<code>github</code> to keep the two folder synced).</p><p>The &quot;issue&quot; you may face is editing the wrong files, and then being confused why your changes aren&#39;t showing up in your testing world.</p><h2 id="confusing-module-function-with-module-function" tabindex="-1">Confusing module.function with module:function <a class="header-anchor" href="#confusing-module-function-with-module-function" aria-label="Permalink to &quot;Confusing module.function with module:function&quot;">​</a></h2><p>In lua, you define a module like <code>local foo = {}</code>. Functions can then be defined like:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">foo</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">arg1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span></code></pre></div><p>This is a shorthand for the longer form (don&#39;t use this except for shadows)</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">foo.</span><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">arg1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span></code></pre></div><p>As you can see, there is a mysterious &#39;self&#39; argument getting passed around when using the <code>:</code> syntax. This roughly represents the current object (?).</p><p>Now imagine that you&#39;ve defined a function as in the first example, and then attempted to call it like this:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> foo.</span><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">baz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>This would be incorrect, since you&#39;ve essentially put &#39;baz&#39; for &#39;self&#39; and &#39;nil&#39; for &#39;arg1&#39;. The correct way to call it would be <code>local value = foo:bar(&#39;baz&#39;)</code>.</p><h2 id="recursive-mjrequire" tabindex="-1">Recursive mjrequire <a class="header-anchor" href="#recursive-mjrequire" aria-label="Permalink to &quot;Recursive mjrequire&quot;">​</a></h2><p>If you have <code>foo.lua</code> which requires <code>bar.lua</code>, then you can&#39;t require <code>bar.lua</code> in <code>foo.lua</code> because it would cause an infinite loop.</p><p>Workarounds:</p><ul><li>mjrequire inside of Functions</li><li>rework your architecture</li><li>pass <code>bar</code> as a parameter to <code>foo</code> (init function)</li></ul>`,22),l=[t];function i(r,c,p,d,u,h){return o(),s("div",null,l)}const f=e(n,[["render",i]]);export{y as __pageData,f as default};
