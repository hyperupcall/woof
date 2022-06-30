# Languages

Woof aims to support the following languages / programs

There are three levels of support:

- None
- Dogfooding (it works on my machine)
- Complete (works everywhere with supporting test suite)

## Buildless

| Language            | Current Support | Official Download                                         | Replaces                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------- | --------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NodeJS              | Dogfooding      | [Official](https://github.com/nodejs/node)                | [asdf-node](https://github.com/asdf-vm/asdf-nodejs), [n](https://github.com/tj/n), [nvm](https://github.com/nvm-sh/nvm), [nvm.fish](https://github.com/jorgebucaran/nvm.fish), [nvmw](https://github.com/hakobera/nvmw), [avn](https://github.com/wbyoung/avn), [fnm](https://github.com/Schniz/fnm), [nave](https://github.com/isaacs/nave), [nodist](https://github.com/nullivex/nodist), [nodenv](https://github.com/nodenv/nodenv), [nodebrew](https://github.com/hokaccha/nodebrew) |
| Deno                | Dogfooding      | [Official](https://github.com/denoland/deno)              | [asdf-deno](https://github.com/asdf-community/asdf-deno), [justjavac/dvm](https://github.com/justjavac/dvm), [ghosind/dvm](https://github.com/ghosind/dvm)                                                                                                                                                                                                                                                                                                                               |
| Go                  | Dogfooding      | [Official](https://github.com/google/go-github)           | [asdf-golang](https://github.com/kennyp/asdf-golang), [gvm](https://github.com/moovweb/gvm), [stefanmaric/g](https://github.com/stefanmaric/g), [voidint/g](https://github.com/voidint/g), [goenv](https://github.com/syndbg/goenv), [goup](https://github.com/owenthereal/goup), [oo](https://github.com/hit9/oo)                                                                                                                                                                       |
| Crystal             | Dogfooding      | [Official](https://github.com/crystal-lang/crystal)       | [asdf-crystal](https://github.com/asdf-community/asdf-crystal), [crenv](https://github.com/crenv/crenv)                                                                                                                                                                                                                                                                                                                                                                                  |
| Nim                 | Dogfooding      | [Official](https://github.com/nim-lang/Nim)               | [asdf-nim](https://github.com/asdf-community/asdf-nim), [choosenim](https://github.com/dom96/choosenim)                                                                                                                                                                                                                                                                                                                                                                                  |
| Dart                | Dogfooding      | [Official](https://dart.dev)                              | [asdf-dart](https://github.com/PatOConnor43/asdf-dart), [dvm](https://github.com/cbracken/dvm)                                                                                                                                                                                                                                                                                                                                                                                           |
| Zig                 | Dogfooding      | [Official](https://github.com/ziglang/zig)                | [asdf-zig](https://github.com/cheetah/asdf-zig)                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Haxe                | Dogfooding      | [Official](https://haxe.org/download)                     | [asdf-haxe](https://github.com/asdf-community/asdf-haxe), [jasononeil/hvm](https://github.com/jasononeil/hvm), [dpeek/hvm](https://github.com/dpeek/hvm)                                                                                                                                                                                                                                                                                                                                 |
| Neko                | Dogfooding      | [Official](https://github.com/HaxeFoundation/neko)        | [asdf-neko](https://github.com/asdf-community/asdf-haxe)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Elm                 | Dogfooding      | [Official](https://github.com/elm/compiler)               | [asdf-elm](https://github.com/asdf-community/asdf-elm)                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Julia               | Dogfooding      | [Official](https://github.com/JuliaLang/julia)            | [asdf-julia](https://github.com/rkyleg/asdf-julia), [juliavm](https://github.com/pmargreff/juliavm)                                                                                                                                                                                                                                                                                                                                                                                      |
| kubectl             | Dogfooding      | [Official](https://github.com/kubernetes/kubectl)         | [asdf-kubectl](https://github.com/asdf-community/asdf-kubectl), [kubenvz](https://github.com/nutellinoit/kubenvz), [kerl](https://github.com/kerl/kerl)                                                                                                                                                                                                                                                                                                                                  |
| Cue                 | Dogfooding      | [Official](https://cuelang.org)                           | [asdf-cue](https://github.com/asdf-community/asdf-cue),[cue-lang](https://github.com/cue-lang/cue)                                                                                                                                                                                                                                                                                                                                                                                       |
| gleam               | Dogfooding      | [Official](https://github.com/gleam-lang/gleam)           | [asdf-gleam](https://github.com/asdf-community/asdf-gleam)                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Solidity            | Dogfooding      | [Official](https://github.com/ethereum/solidity)          | [asdf-solidity](https://github.com/refillic/asdf-solidity), [svm](https://github.com/web3j/svm)                                                                                                                                                                                                                                                                                                                                                                                          |
| Peco                | Dogfooding      | [Official](https://github.com/peco/peco)                  | [asdf-peco](https://github.com/asdf-community/asdf-peco)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| fstar               | Dogfooding      | [Official](https://github.com/FStarLang/FStar)            | [asdf-fstar](https://github.com/asdf-community/asdf-fstar)                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Please              | Dogfooding      | [Official](https://github.com/thought-machine/please)     | [asdf-please](https://github.com/asdf-community/asdf-please)                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Lean                | Dogfooding      | [Official](https://github.com/leanprover/lean4)           | [asdf-lean](https://github.com/asdf-community/asdf-lean)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Ninja               | Dogfooding      | [Official](https://github.com/ninja-build/ninja)          | [asdf-ninja](https://github.com/asdf-community/asdf-ninja)                                                                                                                                                                                                                                                                                                                                                                                                                               |
| gh                  | Dogfooding      | [Official](https://github.com/cli/cli)                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| V                   | Dogfooding      | [Official](https://github.com/vlang/v)                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Earthly             | Dogfooding      | [Official](https://github.com/earthly/earthly)            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Hashicorp Boundary  | Dogfooding      | [Official](https://www.boundaryproject.io/downloads)      | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Hashicorp Consul    | Dogfooding      | [Official](https://www.consul.io/downloads)               | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Hashicorp Levant    | Dogfooding      | [Official](https://github.com/hashicorp/levant)           | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Hashicorp Nomad     | Dogfooding      | [Official](https://www.nomad.io/downloads)                | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Hashicorp Packer    | Dogfooding      | [Official](https://www.packer.io/downloads)               | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Hashicorp Sentinel  | Dogfooding      | [Official](https://docs.hashicorp.com/sentinel/downloads) | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Hashicorp Serf      | Dogfooding      | [Official](https://www.serf.io/downloads.html)            | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Hashicorp Terraform | Dogfooding      | [Official](https://www.terraform.io/downloads)            | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp), [tfenfv](https://github.com/tfutils/tfenv), [terraenv](https://github.com/aaratn/terraenv)                                                                                                                                                                                                                                                                                                                           |
| Hashicorp Vagrant   | Dogfooding      | [Official](https://www.vagrant.io/downloads)              | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Hashicorp Vault     | Dogfooding      | [Official](https://www.vaultproject.io/downloads)         | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Hashicorp Waypoint  | Dogfooding      | [Official](https://www.waypointproject.io/downloads)      | [asdf-hashicorp](https://github.com/asdf-community/asdf-hashicorp)                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Buildfull

This requires a modification to the Module API

| Language | Current Support | Official Download                                 | Replaces                                                                                                                                                                                                   |
| -------- | --------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP      | None            | [Official](https://github.com/php/php-src)        | [asdf-php](https://github.com/asdf-community/asdf-php), [phpenv](https://github.com/phpenv/phpenv), [phpbrew](https://github.com/phpbrew/phpbrew), [php-version](https://github.com/wilmoore/php-version)  |
| Python   | None            | [Official](https://github.com/python/cpython)     | [asdf-python](https://github.com/asdf-vm/asdf-python), [pyenv](https://github.com/pyenv/pyenv), [p](https://github.com/qw3rtman/p), [pvm](https://github.com/DrPandemic/pvm)                               |
| Swift    | None            | [Official](https://github.com/apple/swift)        | [asdf-swift](https://github.com/fcrespo82/asdf-swift), [swiftenv](https://github.com/kylef/swiftenv)                                                                                                       |
| Ruby     | None            | [Official](https://github.com/ruby/ruby)          | [asdf-ruby](https://github.com/asdf-vm/asdf-ruby), [rvm](https://rvm.io), [rbenv](https://github.com/rbenv/rbenv), [chruby](https://github.com/postmodern/chruby), [frum](https://github.com/TaKO8Ki/frum) |
| erlang   | None            | [Official](https://github.com/erlang/otp)         | [asdf-erlang](https://github.com/asdf-vm/asdf-erlang)                                                                                                                                                      |
| Elixir   | None            | [Official](https://github.com/elixir-lang/elixir) | [asdf-elixir](https://github.com/asdf-vm/asdf-elixir), [exenv](https://github.com/exenv/exenv), [kiex](https://github.com/taylor/kiex)                                                                     |
| Meson    | None            | [Official](https://github.com/mesonbuild/meson)   | [asdf-meson](https://github.com/asdf-community/asdf-meson)                                                                                                                                                 |
| HHVM     | None            | [Official](https://docs.hhvm.com/hack)            |                                                                                                                                                                                                            |

## To sort

| Runtime    | Current Support | Official Download                                        | Replaces                                                                                                                                                                                              |
| ---------- | --------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R          | None            | [Official](https://www.r-project.org)                    | [asdf-r](https://github.com/asdf-community/asdf-R), [renv](https://github.com/rstudio/renv), [Renv](https://github.com/viking/Renv)                                                                   |
| Java       | None            | [Official](https://github.com/openjdk/jdk)               | [asdf-java](https://github.com/halcyon/asdf-java), [jenv.be](https://www.jenv.be), [sdkman](https://sdkman.io), [jenv](https://github.com/linux-china/jenv), [jabba](https://github.com/shyiko/jabba) |
| Groovy     | None            | [Official](https://github.com/apache/groovy)             | [asdf-groovy](https://github.com/weibemoura/asdf-groovy), [sdkman-groovy](https://sdkman.io/sdks#groovy)                                                                                              |
| Scala      | None            | [Official](https://github.com/lampepfl/dotty)            | [asdf-scala](https://github.com/sylph01/asdf-scala), [sdkman-scala](https://sdkman.io/sdks#scala)                                                                                                     |
| Clojure    | None            | [Official](https://github.com/clojure/clojure)           | [clojure](https://github.com/asdf-community/asdf-clojure)                                                                                                                                             |
| Dotty      | None            | [Official](https://github.com/lampepfl/dotty)            | [asdf-dotty](https://github.com/asdf-community/asdf-dotty), [dvm](https://github.com/d-ogxwx/dvm)                                                                                                     |
| Kotlin     | None            | [Official](https://github.com/JetBrains/kotlin)          | [asdf-kotlin](https://github.com/asdf-community/asdf-kotlin), [kotlin-sdkman](https://sdkman.io/sdks#kotlin)                                                                                          |
| GraalVM    | None            | [Official](https://github.com/oracle/graal)              | [asdf-graalvm](https://github.com/asdf-community/asdf-graalvm)                                                                                                                                        |
| Haskell    | None            | [Official](https://github.com/ghc/ghc)                   | [asdf-haskell](https://github.com/asdf-community/asdf-haskell)                                                                                                                                        |
| Racket     | None            | [Official](https://github.com/racket/racket)             | [asdf-racket](https://github.com/asdf-community/asdf-racket)                                                                                                                                          |
| sml        | None            | [Official](https://smlnj.org)                            | [asdf-sml](https://github.com/asdf-community/asdf-sml)                                                                                                                                                |
| idris      | None            | [Official](https://www.idris-lang.org)                   | [adsf-idris](https://github.com/asdf-community/asdf-idris)                                                                                                                                            |
| idris2     | None            | [Official](https://github.com/idris-lang/Idris2)         | [asdf-idris2](https://github.com/asdf-community/asdf-idris2)                                                                                                                                          |
| Flutter    | None            | [Official](https://docs.flutter.dev/get-started/install) | [asdf-flutter](https://github.com/oae/asdf-flutter), [fvm](https://github.com/befovy/fvm)                                                                                                             |
| ravi       | None            | [Official](https://github.com/dibyendumajumdar/ravi)     |
| Nelua      | None            | [Official](https://github.com/edubart/nelua-lang)        |
| Odin       | None            | [Official](https://github.com/odin-lang/Odin)            |
| tl         | None            | [Official](https://github.com/teal-language/tl)          |
| MoonScript | None            | [Official](https://github.com/leafo/moonscript)          |
| Yuescript  | None            | [Official](https://github.com/pigpigyyy/Yuescript)       |
| LuxLang    | None            | [Official](https://github.com/LuxLang/lux)               |
| Fennel     | None            | [Official](https://github.com/bakpakin/Fennel)           |
| Hare       | None            | [Official](https://sr.ht/~sircmpwn/hare)                 |
| Eno        | None            | [Official](https://eno-lang.org)                         |
| PureScript | None | [Official](https://www.purescript.org) |
| Grain | None | [Official](https://github.com/grain-lang/grain) |
| Wren | None | [Official](https://github.com/wren-lang/wren) |
| Enso | None | [Official](https://github.com/enso-org/enso) |
| Haxe | None | [Official](https://github.com/HaxeFoundation/haxe) |
| Slice | None | [Official](https://github.com/sylefeb/Silice) |
| Red | None | [Official](https://github.com/red/red) |
| Carp | None | [Official](https://github.com/carp-lang/Carp) |
| vyper | None | [Official](https://github.com/vyperlang/vyper) |
| Mint | None | [Official](https://github.com/mint-lang/mint) |
| Melody | None | [Official](https://github.com/yoav-lavi/melody) |
| Coconut | None | [Official](https://github.com/evhub/coconut) |
| Ballerina | None | [Official](https://github.com/ballerina-platform/ballerina-lang) |
| Odin | None | [Official](https://github.com/odin-lang/Odin) |
| MoonScript | None | [Official](https://github.com/leafo/moonscript) |
| EmojiCode | None | [Official](https://github.com/emojicode/emojicode) |
| artichoke | None | [Official](https://github.com/artichoke/artichoke) |
| gluon | None | [Official](https://github.com/gluon-lang/gluon) |
| ChaiScript | None | [Official](https://github.com/ChaiScript/ChaiScript) |
| janet | None | [Official](https://github.com/janet-lang/janet) |
| P | None | [Official](https://github.com/p-org/P) |
| Tidal | None | [Official](https://github.com/tidalcycles/Tidal) |
| Peregrine | None | [Official](https://github.com/peregrine-lang/Peregrine) |
| Flix | None | [Official](https://github.com/flix/flix) |
| haste-compiler | None | [Official](https://github.com/valderman/haste-compiler) |
| fetlang | None | [Official](https://github.com/fetlang/fetlang) |
| pocketlang | None | [Official](https://github.com/ThakeeNathees/pocketlang) |
| factor | None | [Official](https://github.com/factor/factor) |
| oh | None | [Official](https://github.com/michaelmacinnis/oh) |
| cito | None | [Official](https://github.com/pfusik/cito) |
| mun | None | [Official](https://github.com/mun-lang/mun) |
| Fo | None | [Official](https://github.com/albrow/fo) |
| Starlark | None | [Official](https://github.com/google/starlark-go) |
| lily | None | [Official](https://github.com/FascinatedBox/lily) |
| curv | None | [Official](https://github.com/curv3d/curv) |
| Ring | None | [Official](https://github.com/ring-lang/ring) |
| rescript | None | [Official](https://rescript-lang.org) |
| reason | None | [Official](https://github.com/reasonml/reason) |
| wenyan | None | [Official](https://github.com/wenyan-lang/wenyan) |
| GoPlus | None | [Official](https://github.com/goplus/gop) |
| Pony | None | [Official](https://github.com/ponylang/ponyc) |
| alda | None | [Official](https://github.com/alda-lang/alda) |
| elvish | None | [Official](https://github.com/elves/elvish) |
| unison | None | [Official](https://github.com/unisonweb/unison) |
| Gravity | None | [Official](https://github.com/marcobambini/gravity) |
| gleam | None | [Official](https://github.com/gleam-lang/gleam) |
| Orca | None | [Official](https://github.com/hundredrabbits/Orca) |
| Tengo | None | [Official](https://github.com/d5/tengo) |
| D | None | [Official](https://github.com/dlang/dmd) |
| ispc | None | [Official](https://github.com/agda/agda) |
| agda | None | [Official](https://github.com/agda/agda) |
| Beef | None | [Official](https://github.com/beefytech/Beef) |
| lamdu | None | [Official](https://github.com/lamdu/lamdu) |
| wasp | None | [Official](https://github.com/wasp-lang/wasp) |
| clojerl | None | [Official](https://github.com/clojerl/clojerl) |
| Snap | None | [Official](https://github.com/jmoenig/Snap) |
| anko | None | [Official](https://github.com/mattn/anko) |
| jakt | None | [Official](https://github.com/SerenityOS/jakt) |
| ngs | None | [Official](https://github.com/ngs-lang/ngs) |
| slang | None | [Official](https://github.com/kylestetz/slang) |
| asciidots | None | [Official](https://github.com/aaronjanse/asciidots) |
| MetaCall | None | [Official](https://github.com/metacall/core) |
| Rt | None | [Official](https://github.com/rune-rs/rune) |
| SATySFi | None | [Official](https://github.com/gfngfn/SATySFi) |
| ng | None | [Official](https://github.com/neugram/ng) |
| OneLang | None | [Official](https://github.com/onelang/OneLang) |

### Nuances

- `.kubectl_version`
- `.node-version`, and `.nvmrc`
- `.dvmrc`
- `.ruby-version` and `.rvmrc`
- `.tool-versions`

## Misc

- fortran
- lua
- Dasel
- C
- C++
- C#
- Objective-C?
- Bash
- OPAM / OCAML
- TypeScript, Less, imba, bhai, (via npm)
- [wasm](https://github.com/appcypher/awesome-wasm-langs)

## Out of Scope

- Rust because `rustup` is actually good
- Codename to version mapping (few languages do this and its easy to forget codenames)