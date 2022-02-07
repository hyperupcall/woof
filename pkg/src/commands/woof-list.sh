# shellcheck shell=bash

woof-list() {
	local module_name="$1"

	core.shopt_push -s nullglob

	local -a versions=("$WOOF_DATA_HOME/installs/$module_name"/*/)
	versions=("${versions[@]%/}")
	versions=("${versions[@]##*/}")

	for version in "${versions[@]}"; do
		printf '%s\n' "$version"
	done; unset version

	core.shopt_pop
}