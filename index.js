module.exports = function NoCutscenes(mod) {
	mod.hook('S_PLAY_MOVIE', 1, event => mod.send('C_END_MOVIE', 1, Object.assign({unk: true}, event)) && false)
}