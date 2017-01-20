class test{
    // 只有private属性 插件才能自动拓展
    private name:string;

	public get $name(): string {
		return this.name;
	}

	public set $name(value: string) {
		this.name = value;
	}
    
}
