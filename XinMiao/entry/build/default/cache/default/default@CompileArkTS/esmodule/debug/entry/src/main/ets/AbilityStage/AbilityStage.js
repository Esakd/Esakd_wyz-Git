import AbilityStage from '@ohos:app.ability.AbilityStage';
export default class MyAbilityStage extends AbilityStage {
    onAcceptWant(want) {
        if (want.abilityName == 'ForumAbility') {
            return `ForumAbilityInstance_${want.parameters.instanceKey}`;
        }
        return '';
    }
}
//# sourceMappingURL=AbilityStage.js.map